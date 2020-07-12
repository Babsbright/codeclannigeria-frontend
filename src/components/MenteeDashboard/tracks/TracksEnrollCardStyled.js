import styled from 'styled-components';

const TracksEnrollCardStyled = styled.div`
  .card {
    border-radius: 6.5px;
    width: 19.59rem;
    min-height: 273.75px;
  }

  .card-title {
    font-weight: bold;
    font-size: 1.2rem;
    line-height: 29px;
    /* identical to box height */

    color: #000000;
  }

  .card-text {
    font-weight: normal;
    font-size: 10.6265px;
    line-height: 14px;
    text-align: center;

    color: #747474;
  }

  .stages-card-text {
    font-weight: normal;
    font-size: 0.75rem;
    line-height: 14px;
    margin-bottom: 0;
    color: #747474;
  }

  @media (max-width: 767px) {
    .card {
      width: 100%;
    }

    margin-bottom: 1rem;
  }

  @media (max-width: 320px) {
    .card-title {
      font-size: 19.253px;
    }
  }
`;

export default TracksEnrollCardStyled;
