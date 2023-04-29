import { useEffect, useState } from "react"

const useAuthorization = email => {
    const [isAuthorized, setIsAuthorized] = useState("");
    const [isUserLoading, setIsUserLoading] = useState(true);
    useEffect(() => {
        if (email) {
            fetch(`http://localhost:5000/users/admin/${email}`)
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