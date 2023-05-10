import { useEffect, useState } from "react"

const useAuthorization = email => {
    const [isAuthorized, setIsAuthorized] = useState("");
    const [isUserLoading, setIsUserLoading] = useState(true);
    useEffect(() => {
        if (email) {
            fetch(`https://zooom-vroom-i-garage-server.vercel.app/users/authorization/${email}`,
                {
                    headers: {
                        authorization: `bearrer ${localStorage.getItem('accessToken')}`
                    }
                })
                .then(res => res.json())
                .then(data => {
                    setIsAuthorized(data.isAuthorized);
                    setIsUserLoading(false);
                })
        }
    }, [email])
    return [isAuthorized, isUserLoading]
}

export default useAuthorization;