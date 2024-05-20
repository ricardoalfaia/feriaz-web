import { Footer, Header } from '@/components/layout'

interface LayoutPrincipalWrapperProps extends React.PropsWithChildren {}

export default function LayoutPrincipalWrapper({ children }: LayoutPrincipalWrapperProps) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  )
}
