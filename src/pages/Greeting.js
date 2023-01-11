import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchRandomGreeting } from "../redux/greeting/randomGreeting";

const Greeting = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchRandomGreeting())
  }, [])

  const randomGreeting = useSelector(store => store.randomGreeting.greeting)
  return (<h1>{randomGreeting}</h1>);
}

export default Greeting;



