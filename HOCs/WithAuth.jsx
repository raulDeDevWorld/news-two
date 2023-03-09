import Loader from '../components/Loader'
import { useEffect } from 'react'
import { useRouter } from 'next/router'
import { useUser } from '../context/Context.js'
import { onAuth, getIndexData } from '../firebase/utils'

export function WithAuth(Component) {
    return () => {
        const { user, userDB, success, setUserProfile, setUserData, postsIMG, setUserPostsIMG, setUserDate, setUserMonthAndYear, setUserDayMonthYear, monthAndYear } = useUser()
        const router = useRouter()

        useEffect(() => {
            userDB == '' &&  user == undefined && onAuth(setUserProfile, setUserDate, setUserMonthAndYear, setUserDayMonthYear)
          getIndexData(setUserData, monthAndYear)
        }, [userDB]);
        return (
            <>
                {userDB === undefined && <Loader />}
                {userDB && <Component {...arguments} />}
            </>
        )
    }
}
