
import dynamic from "next/dynamic";
const ForgotPasswordPage = () => {
  const HydrationTestnoSSR = dynamic(() => import("../../../components/hydration/hydrationTest"), {ssr: false});
  return (
    <div>
      <HydrationTestnoSSR  />
      <h1>this is ForgotPasswordPage</h1>
    </div>
  )
}

export default ForgotPasswordPage

