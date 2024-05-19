'use client'

interface ContainerProps extends React.PropsWithChildren {}

export function Container({ children }: ContainerProps) {
  return (
    <div
      className="
        max-w-[2520px]
        mx-auto
        xl:px-20
        md:px-10
        sm:px-5
        px-4
      ">
      {children}
    </div>
  )
}
