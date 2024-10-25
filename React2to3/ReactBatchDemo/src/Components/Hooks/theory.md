hooks.........

---

useEffect(()=>{
runs on every render (component did mount)
})

useEffect(()=>{
runs on first render
},[]) component did mount

useEffect(()=>{

},[dependency]) component did update

useEffect(()=>{ component will unmount
return
},[])

useEffect allow us to perform side effects in react functional component

side effect = data fetching ,

---

useRef()

it creates a mutable reference to a dom element. It does not cause re-render.

---

useMemo()

this is a hook which use to optimize our react application or project.
this hook memoized a complex calculation's result.
and run the function when dependency change.

---

useCallback()

this is a hook which use to optimize our react application or project.
this hook memoized a function and run when it's dependency change.
