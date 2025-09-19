// pages/api/medium-posts.js

import Cors from 'cors';
import { parseString } from 'xml2js';

// Set up CORS middleware to allow requests from your frontend
const cors = Cors({
  methods: ['GET', 'HEAD'],
  origin: '*', // Be specific with your domain in production
});

// Helper function to run middleware
function runMiddleware(req, res, fn) {
  return new Promise((resolve, reject) => {
    fn(req, res, (result) => {
      if (result instanceof Error) {
        return reject(result);
      }
      return resolve(result);
    });
  });
}

export default async function handler(req, res) {
  await runMiddleware(req, res, cors);

  try {
    const mediumResponse = await fetch('https://medium.com/feed/@guhaprasaanth');

    // **Improvement 1: Check for successful HTTP response**
    if (!mediumResponse.ok) {
      console.error(`Medium API responded with status: ${mediumResponse.status}`);
      return res.status(mediumResponse.status).json({ error: 'Failed to fetch Medium feed from the source.' });
    }

    const xmlText = await mediumResponse.text();

    // **Improvement 2: Wrap parseString in a Promise for better async handling**
    const parsePromise = new Promise((resolve, reject) => {
      parseString(xmlText, (err, result) => {
        if (err) {
          console.error("Error parsing XML:", err);
          return reject(new Error('Failed to parse Medium feed.'));
        }
        resolve(result);
      });
    });

    const result = await parsePromise;

    // **Improvement 3: Safely navigate the parsed data structure**
    const items = result?.rss?.channel?.[0]?.item;
    if (!items) {
      console.error("Medium feed structure changed or is empty.");
      return res.status(500).json({ error: 'Failed to retrieve articles. Feed structure is invalid.' });
    }

    const mediumPosts = items.map(item => {
      const content = item['content:encoded']?.[0] || '';
      // Image still returns null
      const imageMatch = content.match(/<img[^>]+src="([^">]+)".*?>/);
      console.log("Image:", imageMatch);
      
      const imageUrl = imageMatch ? imageMatch[1] : null;

      return {
        title: item.title?.[0] || 'No Title',
        link: item.link?.[0] || '#',
        pubDate: item.pubDate?.[0] || new Date().toISOString(),
        image: imageUrl,
        description: content.match(/<p>([^<]+)<\/p>/)?.[1] || 'No description available.',
      };
    });

    res.status(200).json({ posts: mediumPosts });
  } catch (error) {
    console.error('API Route Error:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}