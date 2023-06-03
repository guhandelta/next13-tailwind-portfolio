import localFont from 'next/font/local'

export const anurati = localFont({
  src:[
    {
      path: '../../public/fonts/Anurati-Regular.otf',
      weight: '400'
    }
  ],
  variable: '--font-anurati'
});

export const quantum = localFont({
  src:[
    {
      path: '../../public/fonts/Quantum.ttf',
      weight: '400'
    }
  ],
  variable: '--font-quantum'
});

export const strafer = localFont({
  src:[
    {
      path: '../../public/fonts/Strafer-Regular.ttf',
      weight: '400'
    }
  ],
  variable: '--font-strafer'
});

const Layout = ({ children, className="" }) => {
  return (
    <div className={`${className} w-full h-full inline-block z-0 bg-light p-32 `}>
        {children}
    </div>
  )
}

export default Layout