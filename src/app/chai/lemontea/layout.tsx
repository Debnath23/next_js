export default function LemonTeaLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
      <>
          <h2>Inner Nav Items 2</h2>
          {children}
      </>    
    );
  }