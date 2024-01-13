import React, { useContext } from 'react';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';
import Spinner from 'react-bootstrap/Spinner';




/*
//// * this process from where user eiest befor LOGIN
1. create a Private Route.
2. get children a s props.
3. input & Distructure {user} = useContext(AuthContext).
4. write Condition (!user) if user isn't exiest then go to login els user exiest go to regular route.
5. 
6. redirect to the route which user want to go after logdin
7. give a state "state={{from: location}} replace" then give to replace for erese locate memory.
    //// todo[লগ ইন ছাড়া যারা আসবে তাদের কে লগ ইন করার জন্য সে পেজ এ পাঠানো হবে সাথে একটা স্টেট ও রিপ্লেস দিয়ে দেয়া হবে। আবার লগ ইন পেজ এ যেয়ে এটা রিসিভ করে অন্য সাইডে || যে লোকেশনে যেতে চেয়েছে ইউজার সে লোকেশনে পাঠাতে হবে। রিসিভ করতে হবে ও রিডাইরেক্ট করতে হবে। 
8.  


//// * this process from where user eiest after LOGIN
1. go to logiin page or where redirect || where set privet route.
2. go to the page and receive location = useLocation() from react hook.
3. react store location path to the location hook. then distruct or declare original path like:
4.     // get ridirect location by useLocation hook
    const location = useLocation()
    ////& get exisest location 
    const from = location.state?.from?.pathname || '/';
    [from details : we get "location" hook info > get location "state" which we set for redirect > get state element "from" > get "path" name from {Use optional chainning for avoiding unExpected error } || set defult path for avoid err or somthing. ]
5. use new techiniq. navigaete(from, {replace: true}) [[[old is "naavigate('/"]]]
6. 
7. 
8. 
////^ Loading
1. set loading by use useState.
2. authProvider এ [loader, setLoader] নামে স্টেট ডিক্লেয়ার করে তারপর সেটা info তে পাঠাতে হবে যেন সবখান থেকে আমরা তা এক্সেস করতে পারি। তারপর আমরা privetRoute  এ এসে সেটা এক্সেস করবো কন্ডিশনের মাথ্যমে ও রিয়েক্ট বুটস্ট্রপের মাধ্যমে তা স্পিনার শো করাবো ততক্ষন যতক্ষন না ডাটা লোড হচ্ছে। 
3. যদি ইউজার এভেইলবল না থাকে তাহলে কিছুক্ষনের জন্য স্পিনিং হয়ে তারপর যখন ডাটা লোড হয়ে যাবে তখন স্পিনিং ফলস বা বন্ধ হয়ে পরের কন্ডিশন অনুযায়ী ইউজার পাবে , ডাটা শো করবে। 
4. 
5. 
6. 
*/


const PrivateRoute = ({ children }) => {

    const { user, loading } = useContext(AuthContext)

    // get browser location for smooth travelling 
    const location = useLocation()
    if (loading) {
        return <>
            <Spinner animation="border" role="status">
                <span className="visually-hidden">Loading...</span>
            </Spinner>
        </>
    }
    if (!user) {
        return <Navigate to='/login' state={{ from: location }} replace></Navigate>
    }
    return children;
};

export default PrivateRoute;