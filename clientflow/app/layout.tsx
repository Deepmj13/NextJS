import React from 'react'
import '../style/globals.css' 
export const metadata = {
  title:"Clientflow",
  description:"A lightweight crm"
}

export default function RootLayout({children,}:{
  children:React.ReactNode;
}){
  return(
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}