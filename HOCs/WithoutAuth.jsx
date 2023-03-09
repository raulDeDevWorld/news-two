import Loader from '../components/Loader'
import { useEffect } from 'react'
import { useRouter } from 'next/router'
import { useUser } from '../context/Context.js'
import { onAuth, getIndexData } from '../firebase/utils'

export function WithoutAuth(Component) {
    return () => {
        const { userDB, setUserProfile, setUserData, postsIMG, setUserPostsIMG, setUserDate, setUserMonthAndYear, setUserDayMonthYear, monthAndYear, success} = useUser()

        useEffect(() => {
            userDB == '' && getIndexData(setUserData, monthAndYear)
        }, [userDB]);

        return (
            <>
                {userDB == '' && <Loader />}
                {userDB !== '' && <Component {...arguments} />}
            </>
        )
    }
}
