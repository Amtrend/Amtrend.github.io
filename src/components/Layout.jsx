function Layout({ children }) {
  return (
     <div className="min-h-screen p-4 md:p-12">
      <div className="max-w-4xl mx-auto">
        {children}
      </div>
    </div>
  )
}

export default Layout;
