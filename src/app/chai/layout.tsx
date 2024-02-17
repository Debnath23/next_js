export default function ChaiLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
      <>
          <h2>Inner Nav Items 1</h2>
          {children}
      </>    
    );
  }