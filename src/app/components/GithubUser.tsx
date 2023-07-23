import { CountBtn } from "./CountBtn";
import { Dialog } from "./Dialog";

export interface GithubUserProps {
    user: string;
}

export async function GithubUser(props: GithubUserProps) {
    const response = await fetch("https://api.github.com/users/"+props.user);
    const user = await response.json();

    return(
        <div>
            oi

            {
                JSON.stringify(user)
            }

            <CountBtn />
            <Dialog />
        </div>
    );
}