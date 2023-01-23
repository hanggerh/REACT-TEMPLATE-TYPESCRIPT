import './styles.css'
// import IMAGE from './test.jpg'
// import LOGO from './test.svg'
import { ClickCounter } from './ClickCounter'

export const App = () => {
  return (
    <>
      <h1>
        React TypeScript Webpack Starter Template - {process.env.NODE_ENV}{' '}
        {process.env.name}
      </h1>
      {/* <img src={IMAGE} alt="test" width={300} height={200} />
      <img src={LOGO} alt="test-logo" width={300} /> */}
      <ClickCounter />
    </>
  )
}
