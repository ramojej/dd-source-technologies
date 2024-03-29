import React from "react"
import { graphql } from "gatsby"
import Hero from "../components/Home/Hero"
import Layout from "../components/layout"
import SEO from "../components/seo"
//import { chunk } from "lodash"
import AboutHistorySection from "../components/About/AboutHistorySection"
import AboutTopContent from "../components/About/AboutTopContent"
import AboutTeamSection from "../components/About/AboutTeamSection"
import AfterTeamSection from "../components/About/AfterTeamSection"

const About = ({ data: { wpPage } }) => {
  //console.log(wpPage)
  //divide years to two per slide
  //const years = chunk(wpPage.aboutPageFields.years, 2)

  return (
    <Layout>
      <SEO
        title={wpPage.seo.title}
        description={wpPage.seo.metaDesc}
        image={
          wpPage.seo.opengraphImage
            ? wpPage.seo.opengraphImage.localFile.publicURL
            : null
        }
      />
      <Hero
        home={false}
        title={wpPage.title}
        heroFields={wpPage.innerPagesHeroFields}
      />
      <div className="container-inner px-4 pt-14 pb-4 xl:pt-110px">
        <AboutTopContent
          title={wpPage.aboutPageFields.topContentTitle}
          content={wpPage.aboutPageFields.topContentTexts}
          position="top"
        />
        <AboutHistorySection
          historyImage={
            wpPage.aboutPageFields.historyImage.localFile.childImageSharp.fluid
          }
          historyContent={wpPage.aboutPageFields.historyContent}
          historyTitle={wpPage.aboutPageFields.historyTitle}
          years={wpPage.aboutPageFields.years}
          showButton={wpPage.aboutPageFields.showContactButton}
          buttonText={wpPage.aboutPageFields.contactButtonText}
        />
        <AboutTeamSection
          title={wpPage.aboutPageFields.teamTitle}
          members={wpPage.aboutPageFields.members}
        />
        <AfterTeamSection
          title={wpPage.aboutPageFields.afterTeamTitle}
          text={wpPage.aboutPageFields.afterTeamText}
          image={
            wpPage.aboutPageFields.afterTeamImage.localFile.childImageSharp
              .fluid
          }
        />
        <AfterTeamSection
          title={wpPage.aboutPageFields.missionStatementTitle}
          text={wpPage.aboutPageFields.missionStatementText}
          image={
            wpPage.aboutPageFields.missionStatementImage.localFile
              .childImageSharp.fluid
          }
          reverse={true}
        />
        <AfterTeamSection
          title={wpPage.aboutPageFields.valuesTitle}
          text={wpPage.aboutPageFields.valuesText}
          image={
            wpPage.aboutPageFields.valuesImage.localFile.childImageSharp.fluid
          }
        />
      </div>
    </Layout>
  )
}

export const query = graphql`
  query($id: String!) {
    wpPage(id: { eq: $id }) {
      title
      seo {
        metaDesc
        title
        opengraphImage {
          localFile {
            publicURL
          }
        }
      }
      innerPagesHeroFields {
        heroImage {
          localFile {
            childImageSharp {
              gatsbyImageData(
                layout: FULL_WIDTH
                placeholder: TRACED_SVG
                quality: 90
              )
            }
          }
        }
      }
      aboutPageFields {
        topContentTitle
        topContentTexts
        historyTitle
        historyImage {
          localFile {
            childImageSharp {
              fluid(quality: 100) {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
        }
        historyContent
        years {
          year
          yearContent
        }
        afterTeamText
        afterTeamTitle
        contactButtonText
        afterTeamImage {
          localFile {
            childImageSharp {
              fluid(quality: 100) {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
        }
        missionStatementText
        missionStatementTitle
        contactButtonText
        missionStatementImage {
          localFile {
            childImageSharp {
              fluid(quality: 100) {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
        }
        valuesText
        valuesTitle
        contactButtonText
        valuesImage {
          localFile {
            childImageSharp {
              fluid(quality: 100) {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
        }
        teamTitle
        showContactButton
        members {
          title
          name
          image {
            localFile {
              childImageSharp {
                fluid(quality: 100) {
                  ...GatsbyImageSharpFluid_withWebp
                }
              }
            }
          }
        }
      }
    }
  }
`

export default About
