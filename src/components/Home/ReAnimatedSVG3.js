import React from "react"
import { motion } from "framer-motion"
import { linesVariant, item, containerVariant } from "./AnimatedSVG"

const textContainer = {
  hidden: {
    pathLength: 0,
    opacity: 0,
    fill: "none",
  },
  visible: {
    pathLength: 1,
    opacity: 1,
    fill: "#F26622",
    stroke: "#fff",
  },
}

function Icon1() {
  return (
    <>
      <motion.path
        variants={linesVariant}
        transition={{
          default: { duration: 3, ease: "easeInOut", delay: 1.5 },
          fill: { duration: 3, ease: [1, 0, 0.8, 1] },
          opacity: { duration: 1 },
        }}
        d="M157.5 171.7c-15.3-13.4-24.7-35.2-23.8-60.1.1-4.2.6-8.2 1.2-12.2m34.6 80.5c-1.7-.9-3.4-1.9-5.1-2.9m84.3-21.9c-12.9 18.2-32.1 30.1-52.9 30.7-5.2.1-10.2-.5-15-1.7m23.9-152.3c34.5.2 61.5 32.2 60.3 73.7-.2 7.3-1.3 14.5-3.1 21.3M190 33.6c2.1-.5 4.2-1 6.4-1.3m-52.1 39.6c8-15.1 20-27.2 34.2-34"
        className="st1"
      ></motion.path>
      <motion.path
        variants={linesVariant}
        transition={{
          default: { duration: 3, ease: "easeInOut", delay: 1.5 },
          fill: { duration: 3, ease: [1, 0, 0.8, 1] },
          opacity: { duration: 1 },
        }}
        d="M200.3 39.4c-32.3 2.1-59.1 34.2-60.4 71.9-1.3 37.8 23.6 67.8 56.1 66.9 33.1-.9 61.3-33.4 62.4-72.4 1.1-38.9-25.1-68.6-58.1-66.4zm22.8 122l-1.4-2.9c-7.6 5.3-16.3 8.4-25.4 8.7-9.1.3-17.5-2.3-24.6-7.1l-1.5 3c-7.7-5.1-14-12.7-18.2-21.8l2.5-1.8c-3.9-8.3-5.9-18.1-5.5-28.6.4-10.5 3-20.5 7.5-29.1l-2.4-1.5c4.8-9.5 11.6-17.6 19.6-23.4l1.3 2.8c7.4-5.4 15.9-8.7 25-9.3 9.1-.6 17.6 1.7 24.8 6.3l1.6-3c8 5 14.5 12.4 19 21.6l-2.6 1.9c4.1 8.5 6.3 18.4 6 29.2-.3 10.8-3.1 21-7.7 29.9l2.5 1.6c-5.1 9.6-12.1 17.8-20.5 23.5z"
        className="st1"
      ></motion.path>
      <motion.path
        variants={item}
        transition={{
          default: { duration: 3, ease: "easeInOut", delay: 1.5 },
        }}
        d="M225.6 94.5c-.1-.5-.4-.9-.8-1l-35.1-9.2c-1.5-.4-3.2-.1-4.6 1-1.4 1-2.5 2.6-3 4.5l-1.2 4.5-.5 2.1c-.5 2 .4 4 2.1 4.4l3.3.9-.5 1.8c-.5 2 .4 4 2.1 4.5l4.5 1.2-.7 2.6c-.3 1.1.1 2.2.9 2.7l-.4.5c-.3.3-.6.5-1 .6l-8.9.4v-1.4c.1-1.8-1.1-3.2-2.7-3.1l-4.9.2c-.4 0-.7.4-.7.8l-.6 18c0 .4.3.8.7.8l4.9-.2c1.5-.1 2.8-1.6 2.9-3.4l.1-2.6 9.8-.4c2-.1 3.8-1.1 5.3-2.8l4-4.9.2.1c.2 0 .4.1.5.1.4 0 .7-.1 1.1-.4.5-.4.9-.9 1-1.5l.7-2.6 6.7 1.8c.2.1.4.1.6.1.8 0 1.5-.5 2-1.2.6.1 1.1.1 1.7.1 3.8-.2 7.3-3.3 8.5-7.8.7-2.7.4-5.4-.7-7.7l2.2-1.9c.4-.6.6-1.1.5-1.6zm-43.8 2.1l.3-1.3 23.9 6.4-2.8 2.8-16.3-4.4-4-1.1c-.9-.1-1.4-1.3-1.1-2.4zm-3.1 32.7l-4.2.2.5-16.4 4.2-.2c.8 0 1.4.7 1.3 1.6l-.1 2.2-.2 7.4-.1 3.4c0 1-.6 1.8-1.4 1.8zm17-8.7c-1.2 1.4-2.6 2.2-4.2 2.3l-9.8.4.2-5.8 8.9-.4c.8 0 1.5-.4 2-1.1l.9-1.1 5.4 1.5-3.4 4.2zm7.2-8.6l-.7 2.6c-.1.2-.2.4-.3.5-.2.1-.4.2-.5.1l-8.2-2.2c-.4-.1-.6-.5-.5-1l.7-2.6 6 1.6 3.5 1zm8.4.6l-14.1-3.8-4.1-1.1-5.1-1.4c-.9-.3-1.5-1.4-1.2-2.5l.5-1.8 16 4.3h.5c.1 0 .1-.1.2-.1l3.8-3.9 6.8 1.8-.5 1.9-1.5 5.9c-.2.5-.8.8-1.3.7zm10.4-13.8c.9 1.9 1.1 4.1.5 6.3-1.1 4.2-4.7 6.9-8.2 6.4l.2-.7 1.8-6.9 3.3-2.9 2.4-2.2zm-6.4 3.7l-7.5-2-25.2-6.7 1-3.7c.6-2.5 2.6-4.2 4.6-4.3.4 0 .8 0 1.2.1l34.5 9.1-8.6 7.5zm-36.9 13.4c0 .5-.3.9-.7.9-.4 0-.7-.3-.7-.8v-.1c0-.4.3-.8.7-.8.4 0 .7.4.7.8zm-.1 3.5c0 .5-.3.9-.7.9-.4 0-.7-.3-.7-.8v-.1c0-.4.3-.8.7-.8.4 0 .7.3.7.8zm-.1 3.4c0 .5-.3.9-.7.9-.4 0-.7-.3-.7-.8v-.1c0-.4.3-.8.7-.8.4 0 .7.4.7.8zm-.1 3.4c0 .5-.3.9-.7.9-.4 0-.7-.3-.7-.8v-.1c0-.4.3-.8.7-.8.4 0 .7.4.7.8zm25.3-33.5c.1-.4.5-.7.9-.6h.1c.4.1.6.5.5 1-.1.4-.4.6-.7.6H203.9c-.4-.1-.6-.6-.5-1zm2.9.7c.1-.4.5-.7.9-.6h.1c.4.1.6.5.5 1-.1.4-.4.6-.7.6H206.8c-.5-.1-.7-.5-.5-1zm2.8.8c.1-.4.5-.7.9-.6h.1c.4.1.6.5.5 1-.1.4-.4.6-.7.6H209.6c-.4-.1-.6-.6-.5-1zm2.8.7c.1-.4.5-.7.9-.6h.1c.4.1.6.5.5 1-.1.4-.4.6-.7.6H212.4c-.4-.1-.6-.5-.5-1z"
        className="st2"
      ></motion.path>
    </>
  )
}

function Icon2() {
  return (
    <>
      <motion.path
        variants={linesVariant}
        transition={{
          default: { duration: 3, ease: "easeInOut", delay: 1.5 },
          fill: { duration: 3, ease: [1, 0, 0.8, 1] },
          opacity: { duration: 1 },
        }}
        d="M554.1 157.2c-19.2-14.8-31.3-39-30.9-66.6.1-4.6.5-9.1 1.2-13.6m44.8 89.3c-2.2-1-4.3-2.1-6.4-3.2m104-24.7c-15.6 20.4-39.1 33.7-64.9 34.4-6.4.2-12.7-.5-18.6-1.8M609.2 1.5c42.8-.1 77.2 35.3 76.8 81.4-.1 8.2-1.2 16.2-3.4 23.8M591 3.7c2.6-.6 5.2-1.1 7.9-1.5m-63.5 44.3c9.5-16.8 24.1-30.3 41.4-38"
        className="st1"
      ></motion.path>
      <motion.path
        variants={linesVariant}
        transition={{
          default: { duration: 3, ease: "easeInOut", delay: 1.5 },
          fill: { duration: 3, ease: [1, 0, 0.8, 1] },
          opacity: { duration: 1 },
        }}
        d="M603.9 10c-40 2.7-72.3 38.5-73 80.3-.7 41.9 30.8 75.1 71 74 41.1-1.1 75.3-37.5 75.7-80.9.5-43.4-32.9-76.1-73.7-73.4zm31.3 135.5l-1.8-3.2c-9.3 5.9-20 9.4-31.3 9.8-11.2.3-21.7-2.5-30.6-7.7l-1.8 3.3c-9.7-5.7-17.6-14-23.1-24.2l3-2c-5-9.2-7.7-20.1-7.5-31.7.2-11.7 3.3-22.7 8.5-32.4l-3-1.7c5.7-10.6 13.9-19.6 23.7-26.2l1.7 3.1c9-6 19.5-9.8 30.7-10.5 11.3-.7 21.8 1.8 31 6.7l1.9-3.4c10 5.4 18.4 13.7 24.1 23.9l-3.2 2.1c5.3 9.4 8.3 20.5 8.2 32.5-.1 12-3.3 23.4-8.8 33.4l3.2 1.8c-6.1 10.8-14.7 20-24.9 26.4z"
        className="st1"
      ></motion.path>
      <motion.g
        variants={item}
        transition={{
          default: { duration: 3, ease: "easeInOut", delay: 1.5 },
        }}
      >
        <path
          d="M626 83.6l-22.6-18.3c-.1-.1-.2-.1-.2-.2-.1 0-.1-.1-.2-.1h-.1s-.1 0-.1-.1h-.1H602.4 602.1h-.1-.1-.1-.1-.1H601.3h-.1c-.1 0-.1 0-.2.1h-.1c-.1 0-.1 0-.2.1 0 0-.1 0-.1.1 0 0-.1 0-.1.1-.1 0-.1.1-.2.1-.1.1-.2.1-.2.2l-9 8.1v-3.4c0-.6-.4-1-1-1l-3.9.2c-.5 0-1 .5-1 1.1l-.1 8.5-7.8 7c-1.2 1.1-1.4 2.9-.5 4.1.9 1.2 2.7 1.3 3.9.2l1.1-.9-.3 19.3c0 2.4 1.8 4.4 4.1 4.3l31.4-1.3c2.4-.1 4.3-2.2 4.3-4.7l.2-19.5 1.1.9c1.2 1 3 .7 4-.6.8-1.5.6-3.3-.6-4.3zm-7.2 23.5c0 1.1-.9 2.1-1.9 2.1l-31.4 1.3c-1 0-1.9-.8-1.9-1.9l.3-21.3 17.7-15.9L619 85.5l-.2 21.6z"
          className="st2"
        ></path>
        <path
          d="M599.1 83.6c-1.6.1-3 1.5-3 3.2L596 93l1.9-.1.1-6.2c0-.6.5-1.1 1.1-1.2l4.5-.2c.6 0 1.1.5 1.1 1.1l-.1 6.2 1.9-.1.1-6.2c0-1.7-1.3-3-2.9-3l-4.6.3zM593.9 95.1l-.1 9.3c0 .6.5 1.1 1 1.1l12.6-.5c.6 0 1.1-.5 1.1-1.2l.1-9.3c0-.6-.5-1.1-1-1.1L595 94c-.7-.1-1.1.5-1.1 1.1zm7.3 1.4c1 0 1.7.7 1.7 1.8 0 .7-.4 1.3-.9 1.6v2.1c0 .2-.2.4-.3.4h-1.1c-.2 0-.3-.1-.3-.3V100c-.5-.3-.9-.9-.9-1.6 0-1 .8-1.9 1.8-1.9zM621.9 74l2-.1c.2 0 .3-.2.3-.4-.1-5.9-4.6-10.4-10.2-10.2-.2 0-.3.2-.3.4v2.1c4.6-.3 8.2 3.4 8.2 8.2z"
          className="st2"
        ></path>
        <path
          d="M614.1 58.3c-.2 0-.3.2-.3.4v2.1c7.2-.4 13 5.4 12.9 13l2-.1c.2 0 .3-.2.3-.4 0-8.6-6.6-15.2-14.9-15z"
          className="st2"
        ></path>
        <path
          d="M614.2 52.7c-.2 0-.3.2-.3.4v2.1c10.2-.6 18.4 7.7 18.3 18.4l2-.1c.2 0 .3-.2.3-.4-.1-11.8-9.1-20.9-20.3-20.4z"
          className="st2"
        ></path>
      </motion.g>
    </>
  )
}

function Icon3() {
  return (
    <>
      <motion.path
        variants={linesVariant}
        transition={{
          default: { duration: 5, ease: "easeInOut", delay: 1 },
          fill: { duration: 5, ease: [1, 0, 0.8, 1] },
          opacity: { duration: 1 },
        }}
        d="M734.8 364.4c-21.4-16.9-35-43.3-34.7-72.8 0-4.9.5-9.7 1.2-14.4m50.3 97.6c-2.4-1.2-4.8-2.4-7.1-3.8m114.9-20.5c-17.1 20.9-43 33.8-71.6 33.1-7.1-.2-14-1.2-20.6-3m27-179.4c47.4 2.2 85.8 41.8 85.8 91.1 0 8.7-1.2 17.2-3.5 25.2m-102.4-115c2.9-.5 5.8-.9 8.7-1.1m-69.7 43.8c10.4-17.4 26.3-31 45.4-38.3"
        className="st1"
      ></motion.path>
      <motion.path
        variants={linesVariant}
        transition={{
          default: { duration: 5, ease: "easeInOut", delay: 1 },
          fill: { duration: 5, ease: [1, 0, 0.8, 1] },
          opacity: { duration: 1 },
        }}
        d="M788.5 210c-44.2.7-79.6 37.2-79.9 81.7-.3 44.7 34.7 81.9 79.2 82.9 45.5 1.1 83-35.8 83.1-82.3 0-46.3-37.3-83.1-82.4-82.3zm35.9 146.4l-2-3.6c-10.2 5.8-22.1 9-34.6 8.7-12.4-.3-24-3.9-33.9-10l-2 3.4c-10.8-6.6-19.6-16-25.7-27.1l3.4-1.9c-5.6-10.1-8.7-21.8-8.6-34.3.1-12.4 3.4-24.1 9.1-34.1l-3.3-2c6.2-11 15.2-20.2 26-26.6l1.9 3.4c9.9-5.9 21.5-9.4 33.8-9.6 12.4-.2 24.2 3.1 34.3 8.9l2-3.5c11.2 6.4 20.5 15.6 27 26.8l-3.5 2.1c6 10.3 9.4 22.3 9.4 35.1s-3.5 24.9-9.5 35.2l3.5 2.1c-6.6 11.3-16 20.6-27.3 27z"
        className="st1"
      ></motion.path>
      <motion.g
        variants={item}
        transition={{
          default: { duration: 3, ease: "easeInOut", delay: 1.5 },
        }}
      >
        <path
          d="M822.2 279.8c.6 0 1-.5 1-1v-.7c0-1.3-1-2.3-2.3-2.3h-11.7v-8.5c0-.6-.5-1-1-1H800c-.6 0-1 .5-1 1v8.5h-21.6v-1.5c0-.6-.4-1-1-1s-1 .5-1 1l-.2 41.2-6.1-.1.2-47.1h6.1v1.5c0 .6.4 1 1 1s1-.5 1-1v-2.6c0-.6-.4-1-1-1h-8.1c-.6 0-1 .5-1 1v8.4h-11.4c-1.2 0-2.2 1-2.2 2.2l-.2 27.6c0 1.2 1 2.3 2.2 2.3h2.1c.6 0 1-.5 1-1 0-.6-.4-1-1-1h-2.1c-.1 0-.2-.1-.2-.2l.2-27.6c0-.1.1-.2.2-.2h11.4v2.1h-7.4c-1.2 0-2.2 1-2.2 2.2l-.1 19.4c0 1.2 1 2.3 2.2 2.3l7.4.1v2.1h-5c-.6 0-1 .5-1 1 0 .6.4 1 1 1h5v8.5c0 .6.4 1 1 1l8.1.1c.6 0 1-.5 1-1V308l21.6.2v8.5c0 .6.5 1 1 1l8.2.1c.6 0 1-.5 1-1v-8.5l11.7.1c1.3 0 2.3-1 2.3-2.3l.1-23c0-.6-.5-1-1-1-.6 0-1 .5-1 1l-.1 22.9c0 .1-.1.2-.2.2l-11.7-.1V304l7.6.1c1.3 0 2.3-1 2.3-2.3l.1-19.7c0-1.3-1-2.3-2.3-2.3h-7.6v-2.1H821c.1 0 .2.1.2.2v.7c0 .7.4 1.2 1 1.2zm-55 22h-7.4c-.1 0-.2-.1-.2-.2l.1-19.5c0-.1.1-.2.2-.2h7.4l-.1 19.9zm10.2-19.9h7.5c.1 0 .2.1.2.2l-.1 19.6c0 .1-.1.2-.2.2h-7.5l.1-20zm21.5 20.1h-7.6c-.1 0-.2-.1-.2-.2l.1-19.6c0-.1.1-.2.2-.2h7.6l-.1 20zm.1-22.1h-7.6c-1.2 0-2.2 1-2.2 2.3l-.1 19.6c0 1.3 1 2.3 2.2 2.3l7.6.1v2.1l-21.6-.2V304l7.5.1c1.2 0 2.2-1 2.2-2.3l.1-19.6c0-1.2-1-2.3-2.2-2.3h-7.5v-2.1H799v2.1zm8.1 35.9l-6.2-.1.2-47.4h6.2l-.2 47.5zm9.7-33.8c.1 0 .2.1.2.2l-.1 19.7c0 .1-.1.2-.2.2h-7.6l.1-20.1h7.6z"
          className="st2"
        ></path>
        <path
          d="M773 270.2h-1.1c-.6 0-1 .5-1 1 0 .6.4 1 1 1h1.1c.6 0 1-.5 1-1s-.5-1-1-1zM773 274.7h-1.1c-.6 0-1 .5-1 1 0 .6.4 1 1 1h1.1c.6 0 1-.5 1-1s-.5-1-1-1zM772.9 279.1h-1.1c-.6 0-1 .5-1 1 0 .6.4 1 1 1h1.1c.6 0 1-.5 1-1s-.4-1-1-1zM772.9 283.6h-1.1c-.6 0-1 .5-1 1 0 .6.4 1 1 1h1.1c.6 0 1-.5 1-1s-.4-1-1-1zM772.9 288h-1.1c-.6 0-1 .5-1 1 0 .6.4 1 1 1h1.1c.6 0 1-.5 1-1s-.4-1-1-1zM772.9 292.5h-1.1c-.6 0-1 .5-1 1 0 .6.4 1 1 1h1.1c.6 0 1-.5 1-1s-.5-1-1-1zM772.9 297h-1.1c-.6 0-1 .5-1 1 0 .6.4 1 1 1h1.1c.6 0 1-.5 1-1 0-.6-.5-1-1-1zM772.8 301.4h-1.1c-.6 0-1 .5-1 1 0 .6.4 1 1 1h1.1c.6 0 1-.5 1-1s-.4-1-1-1zM772.8 305.9h-1.1c-.6 0-1 .5-1 1 0 .6.4 1 1 1h1.1c.6 0 1-.5 1-1 0-.6-.4-1-1-1zM772.8 310.3h-1.1c-.6 0-1 .5-1 1 0 .6.4 1 1 1h1.1c.6 0 1-.5 1-1s-.5-1-1-1zM803.6 272.3h1.1c.6 0 1-.5 1-1 0-.6-.5-1-1-1h-1.1c-.6 0-1 .5-1 1s.4 1 1 1zM803.6 276.8h1.1c.6 0 1-.5 1-1 0-.6-.5-1-1-1h-1.1c-.6 0-1 .5-1 1s.4 1 1 1zM803.6 281.2h1.1c.6 0 1-.5 1-1 0-.6-.5-1-1-1h-1.1c-.6 0-1 .5-1 1-.1.6.4 1 1 1zM803.6 285.7h1.1c.6 0 1-.5 1-1 0-.6-.5-1-1-1h-1.1c-.6 0-1 .5-1 1-.1.6.4 1 1 1zM803.5 290.2h1.1c.6 0 1-.5 1-1 0-.6-.5-1-1-1h-1.1c-.6 0-1 .5-1 1s.5 1 1 1zM803.5 294.7h1.1c.6 0 1-.5 1-1 0-.6-.5-1-1-1h-1.1c-.6 0-1 .5-1 1s.5 1 1 1zM803.5 299.2h1.1c.6 0 1-.5 1-1 0-.6-.5-1-1-1h-1.1c-.6 0-1 .5-1 1s.4 1 1 1zM803.5 303.7h1.1c.6 0 1-.5 1-1 0-.6-.5-1-1-1h-1.1c-.6 0-1 .5-1 1s.4 1 1 1zM803.5 308.2h1.1c.6 0 1-.5 1-1 0-.6-.5-1-1-1h-1.1c-.6 0-1 .5-1 1s.4 1 1 1zM803.5 312.7h1.1c.6 0 1-.5 1-1 0-.6-.5-1-1-1h-1.1c-.6 0-1 .5-1 1-.1.5.4 1 1 1z"
          className="st2"
        ></path>
      </motion.g>
    </>
  )
}

function Icon4() {
  return (
    <>
      <motion.path
        variants={linesVariant}
        transition={{
          default: { duration: 5, ease: "easeInOut", delay: 1 },
          fill: { duration: 5, ease: [1, 0, 0.8, 1] },
          opacity: { duration: 1 },
        }}
        d="M493.4 515.3c-18.9-16.9-30.8-42.7-30.3-70.8.1-4.7.5-9.3 1.3-13.7m43.9 95.1c-2.1-1.2-4.2-2.5-6.3-3.9m102.6-15.7c-15.4 19.3-38.7 30.8-64.2 29.1-6.3-.4-12.5-1.6-18.4-3.5m26.2-170.5c42.3 3.8 76.1 43 75.5 90.1-.1 8.3-1.3 16.4-3.4 23.9M530.2 362c2.6-.4 5.1-.7 7.8-.8m-62.8 39.4c9.5-16.2 23.9-28.7 41-35"
        className="st1"
      ></motion.path>
      <motion.path
        variants={linesVariant}
        transition={{
          default: { duration: 5, ease: "easeInOut", delay: 1 },
          fill: { duration: 5, ease: [1, 0, 0.8, 1] },
          opacity: { duration: 1 },
        }}
        d="M543 369.6c-39.4-.9-71.5 32.7-72.3 75.2-.8 42.7 30.2 79.5 69.9 82 40.5 2.6 74.4-31.3 74.9-75.6.5-44.2-32.3-80.6-72.5-81.6zm30.4 141.1l-1.8-3.5c-9.2 5.2-19.8 7.8-30.9 7.1-11.1-.7-21.4-4.5-30.2-10.7l-1.8 3.2c-9.5-6.7-17.4-15.9-22.7-26.8l3-1.7c-4.9-9.9-7.6-21.2-7.4-33.1.2-11.9 3.3-22.9 8.5-32.3l-2.9-2c5.7-10.3 13.8-18.7 23.5-24.5l1.7 3.3c8.9-5.3 19.3-8.2 30.3-7.9 11.1.3 21.5 3.8 30.5 9.7l1.8-3.3c9.9 6.5 18.1 15.7 23.8 26.6l-3.2 1.8c5.2 10 8.1 21.6 8 33.9-.2 12.3-3.4 23.6-8.8 33.2l3.1 2.1c-5.9 10.7-14.4 19.3-24.5 24.9z"
        className="st1"
      ></motion.path>
      <motion.g
        variants={item}
        transition={{
          default: { duration: 5, ease: "easeInOut", delay: 1 },
        }}
      >
        <path
          d="M548.8 423.3c-.4-.2-.9-.1-1.1.4-.2.4 0 1 .4 1.2 3.2 1.8 5.5 5 6.4 8.8.1.5.6.8 1 .7.5-.1.7-.6.6-1.1-1.1-4.3-3.7-7.9-7.3-10zM521.1 435.6c0-.5-.4-.9-.8-1l-2.9-.1c-.5 0-.8.4-.9.9 0 .5.4.9.8.9l2.9.1c.5.1.9-.3.9-.8zM521.8 429l-2.7-1.2c-.4-.2-.9 0-1.1.5-.2.5 0 1 .5 1.2l2.7 1.2c.4.2.9 0 1.1-.5.1-.4-.1-1-.5-1.2zM521 440.5l-2.7 1c-.4.2-.7.7-.5 1.2.2.5.6.7 1.1.6l2.7-1c.4-.2.7-.7.5-1.2-.2-.5-.7-.8-1.1-.6zM566.8 436.6l-3-.1c-.5 0-.9.4-.9.9s.4.9.8 1l3 .1c.5 0 .9-.4.9-.9.1-.6-.3-1-.8-1zM563.1 432.4l2.8-1c.4-.2.7-.7.5-1.2-.2-.5-.7-.7-1.1-.6l-2.8 1c-.4.2-.7.7-.5 1.2.2.5.7.7 1.1.6zM565.7 443.5l-2.7-1.2c-.4-.2-.9 0-1.1.5-.2.5 0 1 .5 1.2l2.7 1.2c.4.2.9 0 1.1-.5.2-.4-.1-1-.5-1.2z"
          className="st2"
        ></path>
        <path
          d="M544.1 418.9c7.7 1.2 13.7 7.9 14.6 16.2.1.5.5.9 1 .8.5-.1.8-.5.7-1-.5-4.4-2.4-8.7-5.3-11.9-2.9-3.2-6.8-5.4-10.8-6-.5-.1-.9.3-.9.8-.1.5.2 1 .7 1.1zM559.7 438.4c-.5-.1-.9.3-.9.8-.6 5.9-3.7 11-8.5 13.9-1.2.7-2 2.1-2 3.6l-.1 3.6-3.6-.2.1-7.3c0-.4.1-.8.4-1.2l1.2-1.7c.5-.6.7-1.4.8-2.3l.1-6.7c.5 0 .9-.4.9-.9s-.4-.9-.8-1v-.1c0-.5-.4-.9-.8-1-.5 0-.9.4-.9.9v.1l-7.4-.3v-.1c0-.5-.4-.9-.8-1-.5 0-.9.4-.9.9v.1c-.5 0-.9.4-.9.9s.4.9.8 1l-.1 6.7c0 .8.2 1.7.7 2.3l1.2 1.8c.2.3.4.8.4 1.2l-.1 7.3-3.6-.2.1-3.6c0-1.5-.7-2.9-1.8-3.7-5-3.5-8.1-9.7-8-16.1.1-9.3 6.7-16.8 15.2-17.5.5 0 .8-.5.8-1s-.5-.9-.9-.8c-4.5.4-8.7 2.5-11.8 6.1-3.1 3.6-4.9 8.3-4.9 13.2-.1 7.3 3.4 13.9 8.8 17.7.6.5 1 1.3 1 2.1l-.1 4.2c-.5.4-.9 1.1-.9 1.9v1.4c0 .6.2 1.1.5 1.6-.3.4-.5.9-.5 1.5v1.4c0 1 .5 1.9 1.2 2.3-.1.3-.2.6-.2.9v1.4c0 1.4 1 2.5 2.2 2.6l1.5.1c.1 2.5 1.9 4.5 4.2 4.6 2.3.1 4.2-1.7 4.3-4.2l1.6.1c1.3.1 2.3-1 2.3-2.4v-1.4c0-.3 0-.6-.1-.9.8-.4 1.3-1.2 1.3-2.2v-1.4c0-.6-.2-1.2-.5-1.6.3-.4.5-1 .5-1.6v-1.4c0-.8-.3-1.5-.9-2l.1-4.2c0-.8.4-1.6 1.1-2 5.2-3.1 8.7-8.8 9.3-15.3.2-.3-.1-.8-.6-.9zm-21.2 10.1c-.2-.3-.4-.8-.4-1.2l.1-6.7 7.4.3-.1 6.7c0 .4-.1.8-.4 1.2l-1.2 1.7c-.5.6-.7 1.4-.8 2.3l-.1 7.3-2.7-.1.1-7.3c0-.8-.2-1.7-.7-2.3l-1.2-1.9zm2.8 29.4c-1.3-.1-2.4-1.3-2.5-2.7l5.1.3c-.1 1.4-1.2 2.5-2.6 2.4zm6.5-4.7c0 .4-.3.6-.6.6-1.4-.1-10.6-.5-11.7-.6-.3 0-.6-.3-.6-.7v-1.4c0-.4.3-.6.6-.6l11.7.6c.3 0 .6.3.6.7v1.4zm1.2-4.5c0 .4-.3.6-.6.6-.7 0-13.5-.7-13.9-.7-.3 0-.6-.3-.6-.7v-1.4c0-.4.3-.6.6-.6l13.9.7c.3 0 .6.3.6.7v1.4zm.1-4.5c0 .4-.3.6-.6.6l-13.9-.7c-.3 0-.6-.3-.6-.7V462c0-.4.3-.6.6-.6l13.9.7c.3 0 .6.3.6.7v1.4z"
          className="st2"
        ></path>
      </motion.g>
    </>
  )
}

function Icon5() {
  return (
    <>
      <motion.path
        variants={linesVariant}
        transition={{
          default: { duration: 5, ease: "easeInOut", delay: 1 },
          fill: { duration: 5, ease: [1, 0, 0.8, 1] },
          opacity: { duration: 1 },
        }}
        d="M186.2 491.8c-15.8-15.4-25.6-39.1-24.7-65 .1-4.3.6-8.5 1.3-12.7m35.8 87.3c-1.8-1.1-3.6-2.3-5.3-3.5m87.2-14.9c-13.3 17.8-33.1 28.5-54.7 27.1-5.4-.3-10.6-1.4-15.5-3.1m24.5-156.9c35.7 3.4 63.7 39.3 62.6 82.5-.2 7.7-1.3 15-3.2 22m-74.6-103.9c2.2-.4 4.4-.6 6.6-.7m-53.9 36.3c8.3-15 20.7-26.5 35.3-32.3"
        className="st1"
      ></motion.path>
      <motion.path
        variants={linesVariant}
        transition={{
          default: { duration: 5, ease: "easeInOut", delay: 1 },
          fill: { duration: 5, ease: [1, 0, 0.8, 1] },
          opacity: { duration: 1 },
        }}
        d="M230.3 357.6c-33.4-.8-61.1 30.3-62.4 69.4-1.3 39.3 24.5 72.9 58.1 75 34.3 2.1 63.4-29.2 64.5-69.8 1-40.4-26.2-73.8-60.2-74.6zm23.8 129.6l-1.4-3.2c-7.9 4.8-16.8 7.3-26.3 6.7-9.4-.6-18.1-4-25.4-9.7l-1.6 3c-8-6.1-14.5-14.6-18.9-24.5l2.6-1.6c-4-9.1-6.1-19.4-5.8-30.4.3-10.9 3.1-21.1 7.7-29.7l-2.5-1.8c5-9.5 12-17.3 20.3-22.6l1.4 3.1c7.6-4.9 16.5-7.6 25.8-7.4 9.4.2 18.2 3.4 25.7 8.8l1.6-3c8.3 5.9 15.1 14.3 19.7 24.3l-2.7 1.7c4.3 9.2 6.6 19.8 6.3 31.1-.3 11.3-3.2 21.7-7.9 30.6l2.6 1.9c-5.3 9.5-12.6 17.4-21.2 22.7z"
        className="st1"
      ></motion.path>
      <motion.g
        variants={item}
        transition={{
          default: { duration: 5, ease: "easeInOut", delay: 1 },
        }}
      >
        <path
          d="M235.9 401.8c1.8.1 3.1 1.8 3.1 3.9l-1.5 52c-.1 2.1-1.5 3.7-3.3 3.6l-14.8-.8c-1.7-.1-3.1-1.8-3.1-3.9l1.5-51.7c.1-2.1 1.5-3.7 3.3-3.6l14.8.5m.1-2.2l-14.7-.5c-2.8-.1-5.1 2.5-5.2 5.8l-1.6 51.6c-.1 3.3 2.1 6.1 4.9 6.2l14.8.8c2.8.1 5.2-2.4 5.3-5.7l1.5-52c0-3.3-2.2-6.1-5-6.2z"
          className="st2"
        ></path>
        <path
          d="M228.2 406.9c3.3.1 5.8 3.3 5.7 7.2-.1 3.8-2.9 6.9-6.1 6.7-3.3-.1-5.8-3.4-5.7-7.2.1-3.8 2.9-6.8 6.1-6.7m.1-2.2c-4.3-.2-7.9 3.8-8 8.9-.2 5.1 3.2 9.3 7.5 9.5 4.3.2 7.9-3.8 8.1-8.9 0-5.1-3.3-9.4-7.6-9.5zM227.5 431.8c2.6.1 4.6 2.7 4.5 5.7-.1 3-2.2 5.4-4.8 5.3-2.6-.1-4.6-2.7-4.5-5.7.1-3.1 2.2-5.4 4.8-5.3m0-2.2c-3.6-.2-6.6 3.2-6.7 7.4-.1 4.2 2.7 7.8 6.3 8 3.6.2 6.6-3.1 6.7-7.4.2-4.3-2.7-7.9-6.3-8z"
          className="st2"
        ></path>
        <path
          d="M230.9 437.4c-.1 2.3-1.7 4.1-3.7 4-2-.1-3.5-2-3.4-4.4.1-2.3 1.7-4.1 3.7-4 1.9.1 3.4 2.1 3.4 4.4zM228.2 408.2c-2.6-.1-4.8 2.3-4.9 5.4-.1 3.1 2 5.7 4.6 5.8 2.6.1 4.8-2.3 4.9-5.4.1-3.1-2-5.7-4.6-5.8zm-1.1 2.6c-.8.3-1.3 1-1.6 1.8-.1.2-.3.4-.5.4h-.2c-.2-.1-.4-.4-.3-.7.4-1.2 1.2-2.1 2.2-2.5.2-.1.5.1.6.3.2.3.1.6-.2.7zm4.1 5c-.4.8-1 1.5-1.7 1.9-.1 0-.1.1-.2 0-.2 0-.3-.1-.4-.3-.1-.3 0-.6.2-.7.5-.3 1-.8 1.3-1.4.1-.3.4-.4.6-.2.2.1.3.5.2.7zM228.4 425.3c0 .5-.4.9-.8.9s-.8-.5-.8-1 .4-.9.8-.9c.5 0 .9.5.8 1zM220.1 451.4c0 .5-.4.9-.8.9s-.8-.5-.8-1 .4-.9.8-.9c.5 0 .8.4.8 1zM223.2 451.5c0 .5-.4.9-.8.9s-.8-.5-.8-1 .4-.9.8-.9c.5.1.8.5.8 1zM226.3 451.7c0 .5-.4.9-.8.9s-.8-.5-.8-1 .4-.9.8-.9c.5 0 .8.5.8 1zM229.4 451.8c0 .5-.4.9-.8.9s-.8-.5-.8-1 .4-.9.8-.9c.5.1.9.5.8 1zM232.6 452c0 .5-.4.9-.8.9-.5 0-.8-.5-.8-1s.4-.9.8-.9.8.5.8 1zM235.7 452.1c0 .5-.4.9-.8.9-.5 0-.8-.5-.8-1s.4-.9.8-.9c.5.1.8.5.8 1z"
          className="st2"
        ></path>
        <g>
          <path
            d="M220 454.7c0 .5-.4.9-.8.9s-.8-.5-.8-1 .4-.9.8-.9c.5 0 .8.5.8 1zM223.1 454.9c0 .5-.4.9-.8.9s-.8-.5-.8-1 .4-.9.8-.9c.5 0 .8.4.8 1zM226.2 455c0 .5-.4.9-.8.9s-.8-.5-.8-1 .4-.9.8-.9c.5 0 .8.5.8 1zM229.3 455.2c0 .5-.4.9-.8.9s-.8-.5-.8-1 .4-.9.8-.9c.5 0 .9.5.8 1zM232.5 455.3c0 .5-.4.9-.8.9-.5 0-.8-.5-.8-1s.4-.9.8-.9c.4.1.8.5.8 1zM235.6 455.5c0 .5-.4.9-.8.9-.5 0-.8-.5-.8-1s.4-.9.8-.9c.5 0 .8.5.8 1z"
            className="st2"
          ></path>
        </g>
        <g>
          <path
            d="M219.9 458.1c0 .5-.4.9-.8.9s-.8-.5-.8-1 .4-.9.8-.9c.5 0 .8.4.8 1zM223 458.2c0 .5-.4.9-.8.9s-.8-.5-.8-1 .4-.9.8-.9c.5 0 .8.5.8 1zM226.1 458.4c0 .5-.4.9-.8.9s-.8-.5-.8-1 .4-.9.8-.9c.5 0 .8.4.8 1zM229.2 458.5c0 .5-.4.9-.8.9s-.8-.5-.8-1 .4-.9.8-.9c.5.1.9.5.8 1zM232.4 458.7c0 .5-.4.9-.8.9-.5 0-.8-.5-.8-1s.4-.9.8-.9.8.5.8 1zM235.5 458.9c0 .5-.4.9-.8.9-.5 0-.8-.5-.8-1s.4-.9.8-.9c.5 0 .8.4.8 1z"
            className="st2"
          ></path>
        </g>
      </motion.g>
    </>
  )
}

function Icon6() {
  return (
    <>
      <motion.path
        variants={linesVariant}
        transition={{
          default: { duration: 5, ease: "easeInOut", delay: 2 },
          fill: { duration: 5, ease: [1, 0, 0.8, 1] },
          opacity: { duration: 1 },
        }}
        d="M23.4 344.8C9.2 330.9.6 309.1 1.6 284.7c.2-4.1.6-8.1 1.3-12m31.7 80.7c-1.6-.9-3.2-2-4.7-3.1m78.8-17.4c-12.2 17.3-30.2 28-49.6 27.5-4.8-.1-9.5-.9-14-2.4m23.4-148.1c32.2 1.9 57.2 34.6 55.8 75.2-.2 7.2-1.3 14.2-3.1 20.8m-66.4-95c2-.4 4-.7 6-.9m-49 36.2c7.6-14.4 18.9-25.7 32.2-31.7"
        className="st1"
      ></motion.path>
      <motion.path
        variants={linesVariant}
        transition={{
          default: { duration: 5, ease: "easeInOut", delay: 2 },
          fill: { duration: 5, ease: [1, 0, 0.8, 1] },
          opacity: { duration: 1 },
        }}
        d="M64.4 217.1c-30.2.5-55.5 30.7-57 67.6-1.5 37 21.6 67.6 51.9 68.3 30.9.7 57.5-29.8 58.8-68 1.3-38.1-23-68.4-53.7-67.9zm20.4 120.8l-1.3-2.9c-7.1 4.8-15.3 7.5-23.8 7.3-8.5-.2-16.3-3.1-22.9-8.1l-1.4 2.8c-7.2-5.4-13-13.1-16.9-22.3l2.4-1.6c-3.5-8.4-5.4-18-5-28.3.4-10.3 3-19.9 7.2-28.2l-2.2-1.6c4.6-9.1 11-16.7 18.5-22l1.2 2.8c7-4.9 14.9-7.8 23.4-7.9 8.5-.1 16.4 2.6 23.1 7.4l1.5-2.9c7.4 5.2 13.5 12.9 17.6 22.1l-2.5 1.7c3.8 8.5 5.8 18.4 5.4 28.9-.4 10.6-3.1 20.5-7.4 29l2.3 1.7c-4.7 9.1-11.4 16.8-19.2 22.1z"
        className="st1"
      ></motion.path>
      <motion.g
        variants={item}
        transition={{
          default: { duration: 5, ease: "easeInOut", delay: 2 },
        }}
      >
        <path
          d="M77.6 281.1c-8.5-10.9-22.7-10.8-31.9 0-.8.9-1.9.9-2.7 0-.7-.9-.7-2.3.1-3.3 10.8-12.7 27.4-12.7 37.2 0 .7.9.7 2.4-.1 3.3-.7.9-1.9.9-2.6 0z"
          className="st2"
        ></path>
        <path
          d="M71.7 287.7c-5.5-6.9-14.7-6.9-20.5-.1-.8.9-1.9.9-2.7 0-.7-.9-.7-2.4.1-3.3 7.4-8.9 19.1-8.9 25.9.1.7.9.7 2.4-.1 3.3-.8.9-2 .9-2.7 0z"
          className="st2"
        ></path>
        <path
          d="M66 294.7c-2.6-3.3-6.8-3.3-9.4-.1-.8.9-1.9.9-2.7 0-.7-.9-.7-2.6.1-3.5 4.2-5.4 10.9-5.4 14.8.1.7.9.7 2.6-.1 3.5-.8 1-1.9 1-2.7 0zM61.2 296.4c2 0 3.6 2 3.5 4.5-.1 2.5-1.8 4.5-3.8 4.5-2 0-3.6-2-3.5-4.5.1-2.6 1.8-4.6 3.8-4.5z"
          className="st2"
        ></path>
      </motion.g>
    </>
  )
}
const ReAnimatedSVG3 = () => {
  const icons = [
    <Icon1 key="icon-1" />,
    <Icon2 key="icon-2" />,
    <Icon3 key="icon-3" />,
    <Icon4 key="icon-4" />,
    <Icon5 key="icon-5" />,
    <Icon6 key="icon-6" />,
  ]

  const lines = [
    "M265.2 101.1L329.2 98 326.3 213",
    "M446 210.6L447.6 131.4 531.1 128.2",
    "M121.7 260.2L173.8 260",
    "M635.1 262.2L714 261.9",
    "M291.6 397.3L358.3 399.5 360.5 310",
    "M414.3 310.5L410.9 468.1 466.3 470.9",
  ]
  return (
    <div className="svg-automation">
      <motion.svg
        xmlns="http://www.w3.org/2000/svg"
        x="0"
        y="0"
        enableBackground="new 0 0 881.5 537.1"
        version="1.1"
        viewBox="0 0 881.5 537.1"
        xmlSpace="preserve"
        variants={containerVariant}
        initial="hidden"
        animate="visible"
        transition={{ type: "tween" }}
        exit={{ opacity: 0 }}
      >
        <motion.path
          variants={textContainer}
          transition={{
            default: { duration: 3, ease: "easeInOut", delay: 1 },
            fill: { duration: 3, ease: [1, 0, 0.8, 1], delay: 2 },
            opacity: { duration: 3, delay: 2 },
          }}
          d="M606.9 312.2l-412.7-3.8c-12.2-.1-21.6-11.8-21.1-26.2l1.3-40.9c.5-14.3 10.6-26 22.7-26.2l411.1-6.9c15.2-.3 27.4 12.6 27.2 28.7l-.5 46.2c-.2 16.2-12.8 29.3-28 29.1z"
        ></motion.path>
        <motion.path
          variants={item}
          transition={{
            default: { duration: 3, ease: "easeInOut" },
          }}
          d="M242.7 284.5l-2.9-10.7h-18.4l-3.5 10.6h-5.5l16.5-48.4 6-.1 13.7 48.6h-5.9zm-19.6-15.7h15.3l-6.9-25-8.4 25zM280.4 245.7h5.6l-1.1 39h-5.6l.2-6.3c-2.4 4.6-6.1 6.9-11.2 6.9-3.7 0-6.8-1.4-9.2-4.3-2.4-2.9-3.5-6.9-3.4-12.1l.7-23h5.5l-.6 21.9c-.1 3.9.6 6.8 2.2 8.9 1.6 2.1 3.8 3.1 6.7 3.1 2.9 0 5.1-1 6.9-3.1 1.7-2.1 2.6-5 2.7-8.9l.6-22.1zM305.5 279.4h4.7l-.1 5.3h-5.8c-5.9 0-8.8-3.4-8.6-10.1l.6-23.8h-4.4l.1-5.3h4.4l.3-9.7 5.7-.1-.3 9.7 8.9-.1-.1 5.3-8.9.1-.6 23.8c0 1.8.2 3 .8 3.7.7.8 1.8 1.2 3.3 1.2zM319 279.8c-3.1-3.7-4.5-8.6-4.4-14.7.2-6.1 1.9-11 5.3-14.7 3.4-3.8 7.6-5.7 12.6-5.7s9.2 1.8 12.4 5.6c3.3 3.8 4.8 8.7 4.7 14.8-.1 6.1-2 11-5.6 14.8-3.6 3.8-7.9 5.7-12.9 5.6-5-.1-9.1-2-12.1-5.7zm12.2.2c3.3 0 6.1-1.3 8.6-4s3.8-6.4 3.9-11.1c.1-4.7-.9-8.4-3.2-11-2.2-2.6-5-3.9-8.2-3.9-3.3 0-6 1.4-8.3 4-2.2 2.6-3.4 6.3-3.6 11-.1 4.7.8 8.4 2.9 11 2.1 2.7 4.7 4 7.9 4zM363.3 245l-.2 6.4c2.5-4.8 6.4-7.2 11.7-7.2 2.7 0 5.2.7 7.3 2.2 2.2 1.5 3.8 3.6 4.9 6.4 1.4-2.7 3.2-4.9 5.5-6.4 2.3-1.6 4.9-2.3 7.7-2.4 4.1 0 7.4 1.4 10 4.4 2.6 2.9 3.9 7.2 3.8 12.6l-.5 23.9h-5.9l.5-22.8c.1-4.1-.7-7.1-2.5-9.2-1.7-2.1-4.1-3.1-7.2-3.1-3.1 0-5.5 1.1-7.3 3.2-1.8 2.1-2.8 5.2-2.8 9.2l-.5 22.7h-5.9l.5-22.6c.1-4-.7-7.1-2.4-9.2-1.7-2.1-4-3.1-7.1-3.1-3 0-5.4 1.1-7.2 3.2-1.8 2.1-2.7 5.1-2.8 9.2l-.5 22.5h-5.8l.9-39.8 5.8-.1zM425.8 279.7c-3.2-4-4.8-9-4.7-15.2.1-6.2 1.9-11.2 5.3-15 3.4-3.8 7.6-5.8 12.6-5.8 3.1 0 5.8.8 8.2 2.4 2.3 1.6 4.1 3.7 5.2 6.3l.2-8.2 6.2-.1-.8 40.9h-6.2l.2-8.3c-1.3 2.7-3.1 4.8-5.5 6.5-2.4 1.7-5.1 2.5-8.3 2.5-5 0-9.1-2-12.4-6zm22.5-4c2.5-2.8 3.8-6.5 3.9-11.1.1-4.6-1.1-8.3-3.5-11-2.4-2.8-5.3-4.1-8.7-4.1-3.4 0-6.4 1.4-8.8 4-2.5 2.7-3.8 6.3-3.9 10.9-.1 4.6 1 8.3 3.4 11.2 2.4 2.9 5.3 4.3 8.7 4.3 3.4 0 6.4-1.4 8.9-4.2zM480.6 279.6h5.1l-.1 5.6h-6.3c-6.5 0-9.7-3.5-9.6-10.6l.5-24.9h-4.8l.1-5.5h4.8l.2-10.1 6.3-.1-.2 10.1 9.7-.1-.1 5.5-9.7.1-.5 25c0 1.8.3 3.1 1 3.9.6.7 1.8 1.1 3.6 1.1zM499.6 235.9c-.8.9-1.9 1.4-3.1 1.4-1.2 0-2.2-.4-3-1.3-.8-.9-1.2-2-1.1-3.3 0-1.3.5-2.4 1.3-3.3.8-.9 1.8-1.4 3-1.4s2.2.4 3 1.3c.8.9 1.2 2 1.2 3.3-.1 1.3-.5 2.4-1.3 3.3zm-7.1 49.2l.7-41.2 6.3-.1-.7 41.3h-6.3zM512 280c-3.4-3.9-5.1-9.1-5-15.5.1-6.4 2-11.5 5.7-15.5s8.4-6 13.9-6c5.6 0 10.2 1.9 13.8 5.8 3.7 4 5.4 9.1 5.3 15.6-.1 6.4-2.1 11.6-6.1 15.6-3.9 4-8.7 6-14.3 5.9-5.3 0-9.8-2-13.3-5.9zm13.6.2c3.6 0 6.7-1.4 9.4-4.2 2.7-2.8 4.1-6.7 4.2-11.7.1-5-1.1-8.8-3.6-11.6-2.5-2.8-5.5-4.1-9.2-4.1-3.6 0-6.7 1.4-9.1 4.2-2.5 2.8-3.7 6.6-3.8 11.6-.1 5 1 8.8 3.3 11.6 2.3 2.8 5.2 4.2 8.8 4.2zM560.7 243.4l-.1 6.8c2.7-5 7-7.5 12.9-7.6 4.4 0 8 1.5 10.9 4.6 2.9 3.1 4.3 7.5 4.2 13.2l-.3 25h-6.5l.3-23.8c.1-4.2-.9-7.5-2.7-9.7-1.9-2.2-4.5-3.3-7.9-3.2-3.4 0-6 1.1-8 3.3-2 2.2-3 5.4-3 9.6l-.3 23.7h-6.5l.6-41.9h6.4z"
          className="st2"
        ></motion.path>

        {icons.map(icon => {
          return (
            <motion.g
              key={icon.key}
              variants={item}
              transition={{ type: "tween" }}
            >
              {icon}
            </motion.g>
          )
        })}
        {lines.map((line, i) => {
          return (
            <motion.path
              variants={linesVariant}
              transition={{
                default: { duration: 1, ease: "easeInOut", delay: 3 },
                fill: { duration: 1, ease: [1, 0, 0.8, 1] },
              }}
              className="st0"
              key={i}
              d={line}
            ></motion.path>
          )
        })}
      </motion.svg>
    </div>
  )
}

export default ReAnimatedSVG3
