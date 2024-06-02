export default function Tabs({ tabButtons, children, ButtonsContainer }) {
//   const ButtonsContainer = buttonsContainer
  return (
    <>
      <ButtonsContainer>{tabButtons}</ButtonsContainer>
      {children}
    </>
  )
}
