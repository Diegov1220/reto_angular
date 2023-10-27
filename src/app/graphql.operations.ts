import { gql } from "apollo-angular";

const POST = gql`
  query MyQuery {
    countries {
      name
      capital
      languages {
        name
      }
      currency
      states {
        name
      }
      continent {
        name
      }
    }
  }
`

const CONT = gql`
  query MyQuery {
    continents {
      name
    }
  }
`

export {POST,CONT}
