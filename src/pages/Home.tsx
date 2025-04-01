import { MainTemplate } from '../MainTemplate'
import { Container } from '../components/Container'
import { FocusSection } from '../components/FocusSection'

export function Home() {
  return (
    <MainTemplate>
      <Container>
        <FocusSection />
      </Container>
    </MainTemplate>
  )
}
