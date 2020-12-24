import React from "react"
import HeroWave from "../../assets/herowave.svg"
import PropTypes from "prop-types"

const HomeSource = ({ title, content }) => {
  return (
    <section className="bg-gradient-to-b source-tech-section from-light-grey to-white relative py-28 xl:pt-270px xl:pb-210px">
      <HeroWave className="absolute top-0 z-20 transform rotate-180" />
      <div className="text-center container-sm px-4 mx-auto">
        <h2 className="green-line green-line-center st-h2 st-h2-mb-15">
          {title}
        </h2>
        <div dangerouslySetInnerHTML={{ __html: content }} />
      </div>
    </section>
  )
}

HomeSource.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
}

export default HomeSource
