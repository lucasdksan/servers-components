import { Suspense } from "react";
import { GithubUser } from "./components/GithubUser";
import { DialogProvider } from "./contexts/DialogContext";

export default function Home() {
  return (
    <DialogProvider>
      <div>
        oi
      </div>
      <Suspense fallback={<p>Carregando...</p>}>
        <GithubUser user="lucasdksan"/>
      </Suspense>
    </DialogProvider>
  )
}
