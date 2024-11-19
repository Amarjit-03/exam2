export default function MainHeading({ children }: { children: any }) {
  return (
    <>
      <h1 className="text-5xl px-3 mb-5 subpixel-antialiased text-blue-500 underline">
        {children}
      </h1>
    </>
  );
}
