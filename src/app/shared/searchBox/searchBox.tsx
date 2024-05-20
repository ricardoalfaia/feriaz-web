export function SearchBox({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <div className="bg-[#D9D9D9] py-[10px]">
      <div className="p-lg mx-2xl search bg-primary-foreground h-[234px] text-white rounded-b-[10px]">{children}</div>
    </div>
  )
}
