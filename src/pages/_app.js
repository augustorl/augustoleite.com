import GlobalStyle from '../styles/GlobalStyle';
import Wrapper from '../components/Wrapper';


export default function App({ Component, pageProps }) {
  return (
    <Wrapper>
      <GlobalStyle />
        <Component {...pageProps} />
    </Wrapper>
  )
}
