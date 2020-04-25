/** @jsx jsx */
import { jsx, Container } from "theme-ui"

export default () => (
  <Container>
    <h1
      sx={{
        color: "primary",
        fontFamily: "heading",
        "&:hover": {
          color: "secondary",
        },
      }}
    >
      Hello Theme UI
    </h1>
  </Container>
)
