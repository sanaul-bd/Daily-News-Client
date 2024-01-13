

**************** Daily News App ****************
    Project Name: Daily News App (client site)
    Date: 7/13/23
    Work: Dom, route, responsive, firebase Ect.
    firebase link: https://console.firebase.google.com/u/1/project/daily-news-c53b2/authentication/users
************************************************


<!--todo Mod: 60-3 Module Overview, Project setup and router setup -->
1. install used Techonology: react dom, react router, firebase, npm install react-icons --save,
2. ROUTE SETUP: 

<!--todo Mod: 60-4 Create Layout, Folder Structure and Basic Components -->
1. creat Pages, Home, Left nav, Rithg Nav, Footer.
2. Make route, set OutLet etc.
3. set routerProvider, send routes as props. 

<!--todo Mod: 60-5 Install node-express and run your server -->
1. creat Node server With Express.js
    a. mkdir myapp
    b. cd myapp
    c. npm init -y
    d. creat a file in root dir "index.jsx" || entry point: (index.js)
    e. npm install express || npm i express
    f. nodemon index.jsx (nodemone for Node Monitor [monitor node ]) || npm install -g nodemon
    g. run server.
    h. thn creat a dir "Data" to root dire of server folder.
    i. creat a file on Data dir "Categoris.json" > 
2. goto "leftSideMenu.jsx" thn creat a state for store Data.json file in state. 
3. {{ERROR}} 'no-cors' to fetch the resource with CORS disabled. install "npm i cors"
4. npm install cors > for avoiding fetch error from server to other domain. 
    => cors is using for giveing permition for shering data to other website. 
5. run server : nodemon index.jsx || nodemon (filename)

<!--todo Mod: 61-2  Create New and category data loading API -->
1. creating news_id api.
2. creating news_category api. 

<!--todo Mod: 61-3 Load news category data from server -->
1. send news with loader thn receive news with useLoader then print. 

<!--todo Mod:  -->
1. details.length  > 250 ? যদি সত্য হয় তাহলে {details.slice(0, 250) + '...'} স্লাইস করে দেখাও + একটা ত্রি ডট দেখাও + <Link to={/news/${_id}}>read more<Link> একটা ডায়নামিক লিঙ্ক বাটন দাও , ক্লিকে আইডি দাও যেন সে পুরো নিউজে নিয়ে যেতে পারে। ঃ যদি  শর্ত মিথ্যে হয় তাহলে details.length  > 250 ? শব্দ সংখ্যা ২৫০ থেকে কম হবে তা এখানেই প্রিন্ট করে দেখিয়ে দিবো। 
    <Card.Text>
        {
            details.length  > 250 ?
            <span>{details.slice(0, 250) + '...'} <Link to={`/news/${_id}`}>Read More</Link> </span> :
            <span>{details}</span>
        }
    </Card.Text>

<!--todo Mod: 61-6 Set Auth Context and Auth Provider to share auth info -->
1. creat a context dir on src folder > Creat a AuthProvider folder > AuthProvider.jsx

<!--todo Mod: 61-7 Implement Google Sign In and display User info -->
1. set google lo gin button
2. set user state for store user data
3. apply useEffect and set data obsarver for checking data change or not.
4. for redirect after loggd in where in want to go.
    const navigaete = useNavigate()
    thn use >> navigate('/)


<!--todo Mod: 62-1 Recap and Display Login error and Private Route -->
1. set spinner state. defult state is true only useEffect obsever is false. privetRoute.jsx


<!--todo Mod: 62.2 - Privet route fix redirect after log in -->
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

////^ Loading
1. set loading by use useState.
2. authProvider এ [loader, setLoader] নামে স্টেট ডিক্লেয়ার করে তারপর সেটা info তে পাঠাতে হবে যেন সবখান থেকে আমরা তা এক্সেস করতে পারি। তারপর আমরা privetRoute  এ এসে সেটা এক্সেস করবো কন্ডিশনের মাথ্যমে ও রিয়েক্ট বুটস্ট্রপের মাধ্যমে তা স্পিনার শো করাবো ততক্ষন যতক্ষন না ডাটা লোড হচ্ছে। 
3. যদি ইউজার এভেইলবল না থাকে তাহলে কিছুক্ষনের জন্য স্পিনিং হয়ে তারপর যখন ডাটা লোড হয়ে যাবে তখন স্পিনিং ফলস বা বন্ধ হয়ে পরের কন্ডিশন অনুযায়ী ইউজার পাবে , ডাটা শো করবে। 
4. 
 
*/

<!--todo Mod: 62-3 Accept Terms and conditions update name and photo -->
1. Setpe to Update User: update user crat like react method, we just using tnk call somewhere where it need. thn pass a object for update .

<!--todo Mod: 62-4 (Optional) Send Email Verification Email -->
1. send email verification with documention similar.. easy.
2. react hot toast: install hot toast. "npm install react-hot-toast" > use <Toaster></Toaster> on app.jsx file under the <RouterProvider><routerProvider>
3. toast.success('Please Verify your Email Address')  [call it where need . ]
4. set conditon if user.emailVerified not true then stop navigate other page. 

<!--todo Mod: 62-5 (Optional) Enforce email verification and debug warning --> VVi
1. if(currentUser == null || currentUser.emailVerified) যদি কারেন্ট ইউজার থাকে অথবা নাল হয় অথবা কারেন্ট ইউজারে ইমেইল ভেরিফাইড হয় তাহলে স্টেট সেট হবে। ইউজার সেট হবে শো হবে। নতুবা হবে না। 
        // call firbase for obsarve user state
    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
            console.log('user insdie state change', currentUser);
            if(currentUser == null || currentUser.emailVerified){
                setUser(currentUser)
            }
            setLoading(false)
        })
        return () => {
            unSubscribe()
        }
    }, [])
2. 


<!--todo Mod: 62-6 (Optional) Update username photUR with useRef --> vvi
1. প্রোফাইল আইকনে ক্লিক করলে আমরা আলাদা একটা কম্পোনেন্ট এ যাবো ও সেখান থেকে ইনফরমেশন আপডেট করতে পারবো। 
2. defaultValue={user?.email}
3. readOnly
4. 

<!--todo Mod: 62-7 (optional) Environment variable for Firebase in Create React App --> দেখতে হবে।
  : অথেন্টিকেশন সহ অন্যান্য কাজ গুলো যেন অন্যরা নিরাপত্তার জন্য ব্যাবহৃত হয়। আমরা যে ফাইল বানাবো সেখানে যে ইনফো দিবো সেগুল গিটে যাবে না। 
  1. creat a file on root Directory ".env.local",
  2. আমরা তৈরী করা ফাইলে ফেক নেম করে আমরা রাখবো। 
  3. রিড করার সময় ফেক নেম ধরে রিড করবো কিন্তু আসল ফাইল, কি আমার হাইড রয়ে যাবে। 
  4. ex: api creat [API_CREAT_APIKEY= 'ApI number']
  5. read api: api_key = proces.env.[অইখানে দেওয়া ফেক নেম ইম্পোর্ট করে দিবো]


<!--todo Mod: 62-9 Deploy Server and client side code with api url update [Previous Module] -->
1. https://web.programming-hero.com/update-1/video/update-1-62_5-1-practice-travel-guru-and-vercel-server-deployment
2. 
3. 
4. 
5. 
6. 
7. 
8. 
9. 
10. 

<!--todo Mod:  -->
1. 
2. 
3. 
4. 
5. 
6. 
7. 
8. 
9. 
10. 

<!--todo Mod:  -->
1. 
2. 
3. 
4. 
5. 
6. 
7. 
8. 
9. 
10. 

<!--todo Mod:  -->
1. 
2. 
3. 
4. 
5. 
6. 
7. 
8. 
9. 
10. 

<!--todo Mod:  -->
1. 
2. 
3. 
4. 
5. 
6. 
7. 
8. 
9. 
10. 

<!--todo Mod:  -->
1. 
2. 
3. 
4. 
5. 
6. 
7. 
8. 
9. 
10. 

<!--todo Mod:  -->
1. 
2. 
3. 
4. 
5. 
6. 
7. 
8. 
9. 
10. 

<!--todo Mod:  -->
1. 
2. 
3. 
4. 
5. 
6. 
7. 
8. 
9. 
10. 

<!--todo Mod:  -->
1. 
2. 
3. 
4. 
5. 
6. 
7. 
8. 
9. 
10. 

<!--todo Mod:  -->
1. 
2. 
3. 
4. 
5. 
6. 
7. 
8. 
9. 
10. 

<!--todo Mod:  -->
1. 
2. 
3. 
4. 
5. 
6. 
7. 
8. 
9. 
10. 

<!--todo Mod:  -->
1. 
2. 
3. 
4. 
5. 
6. 
7. 
8. 
9. 
10. 

<!--todo Mod:  -->
1. 
2. 
3. 
4. 
5. 
6. 
7. 
8. 
9. 
10. 

<!--todo Mod:  -->
1. 
2. 
3. 
4. 
5. 
6. 
7. 
8. 
9. 
10. 

<!--todo Mod:  -->
1. 
2. 
3. 
4. 
5. 
6. 
7. 
8. 
9. 
10. 

<!--todo Mod:  -->
1. 
2. 
3. 
4. 
5. 
6. 
7. 
8. 
9. 
10. 

<!--todo Mod:  -->
1. 
2. 
3. 
4. 
5. 
6. 
7. 
8. 
9. 
10. 

<!--todo Mod:  -->
1. 
2. 
3. 
4. 
5. 
6. 
7. 
8. 
9. 
10. 

<!--todo Mod:  -->
1. 
2. 
3. 
4. 
5. 
6. 
7. 
8. 
9. 
10. 

<!--todo Mod:  -->
1. 
2. 
3. 
4. 
5. 
6. 
7. 
8. 
9. 
10. 

<!--todo Mod:  -->
1. 
2. 
3. 
4. 
5. 
6. 
7. 
8. 
9. 
10. 

<!--todo Mod:  -->
1. 
2. 
3. 
4. 
5. 
6. 
7. 
8. 
9. 
10. 

<!--todo Mod:  -->
1. 
2. 
3. 
4. 
5. 
6. 
7. 
8. 
9. 
10. 

<!--todo Mod:  -->
1. 
2. 
3. 
4. 
5. 
6. 
7. 
8. 
9. 
10. 

<!--todo Mod:  -->
1. 
2. 
3. 
4. 
5. 
6. 
7. 
8. 
9. 
10. 

<!--todo Mod:  -->
1. 
2. 
3. 
4. 
5. 
6. 
7. 
8. 
9. 
10. 

<!--todo Mod:  -->
1. 
2. 
3. 
4. 
5. 
6. 
7. 
8. 
9. 
10. 
