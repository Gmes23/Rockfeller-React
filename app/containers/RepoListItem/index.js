/**
 * RepoListItem
 *
 * Lists the name and the issue count of a repository
 */

import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { FormattedNumber } from 'react-intl';

import { makeSelectCurrentUser } from 'containers/App/selectors';
import ListItem from 'components/ListItem';
import IssueIcon from './IssueIcon';
import IssueLink from './IssueLink';
import RepoLink from './RepoLink';
import Wrapper from './Wrapper';



import styled from 'styled-components';

import Img from './Img';
import PlaceholderB from './placeholderB.jpg'


const Container = styled.div`
  width: 100%;
  height: 210px;
  margin-top: 20px;
  display: flex;
`;

const DateResultWrap = styled.div`
  width:  11%;
  height: 100%;
  background-color: red;
  text-align: center;
  padding-top: 30px;
`;

const ResultImgWrap = styled.div`
  height: 100%;
  width: 55%;
`;

const ResultDescriptionWrap = styled.div`
  width: 34%;
  height: 100%;
`;

const DescriptionTitle = styled.div`
  width: 100%;
  display: flex;
  padding-left: 5%;
`;

const TitleH1 = styled.h1`
  font-family: tablet-gothic, sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 1em;
`;

const ArrowHiddenIcon = styled.a`
  color: red;
  margin-left: 18px;
  position: relative;
  bottom: 0px;
  -webkit-transform: rotate(180deg);
  -moz-transform: rotate(180deg);
  -o-transform: rotate(180deg);
  -ms-transform: rotate(180deg);
  transform: rotate(180deg);
`;

const ResultDescriptionPCont = styled.div`
  width: 100%;
  padding-left: 5%;
`;
 
 const ResultDescription_P = styled.p`
  font-family: museo-sans, sans-serif;
  font-style: normal;
  font-weight: 100;
 `;

 const DateResult_h1 = styled.h1`
  color: white;
  margin: 0px;
  font-family: 'Open Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
 `;

  const DateResult_p = styled.p`
  margin: 0px;
  color: white;
  font-weight: 600;
  font-family: 'Open Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  font-size: 1.4em;
 `;

  const DateResult_p2 = styled.p`
  margin: 0px;
  color: white;
  font-family: tablet-gothic, sans-serif;
  font-style: normal;
  font-weight: 400;
 `;

  const DateResult_p3 = styled.p`
  margin: 0px;
  color: white;
  font-family: tablet-gothic, sans-serif;
  font-style: normal;
  font-weight: 400;
 `;


 const Span = styled.span`
  position: absolute;
  border-bottom: solid 1.5px white;
  width: 20px;
`;

const SpanDiv = styled.div`
  width: 100%;
  padding-right: 15%;
`;

const PlaceDescription = styled.p`
  margin: 0px;
  font-family: tablet-gothic, sans-serif;
  font-style: italic;
  font-weight: 100;
  margin-left: 15px;
  font-size: 13px;
`;

const months = [ "January", "February", "March", "April", "May", "June",
   "July", "August", "September", "October", "November", "December" ];


export class RepoListItem extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {



    const item = this.props.item;
    var dateObj = item.dates.start.localDate;
    var date = dateObj.split('-')[2];
    var year = dateObj.split('-')[0];
    var month = months[parseInt(dateObj.split('-')[1]) - 1];
    let nameprefix = '';

    // If the repository is owned by a different person than we got the data for
    // it's a fork and we should show the name of the owner
    // if (item.owner.login !== this.props.currentUser) {
    //   nameprefix = `${item.name}/`;
    // }
    // if (item.images[0].ratio == '16_9') {

    // }

    // Put together the content of the repository
    const content = (


      <Container>
        <DateResultWrap>
              <DateResult_h1 >
                {date}
              </DateResult_h1 >
              <DateResult_p>{month}</DateResult_p>
              <DateResult_p3>{year}</DateResult_p3>
              <SpanDiv>
              <Span />
              </SpanDiv>
              <DateResult_p2>{item._embedded.venues[0].name}</DateResult_p2>

        </DateResultWrap>
            <ResultImgWrap>
              <Img src={item.images[0].url} alt="something" />
            </ResultImgWrap>
            <ResultDescriptionWrap>
                <DescriptionTitle>
                    <TitleH1> {item._embedded.attractions[0].name} </TitleH1>
                    <PlaceDescription> ({item._embedded.venues[0].city.name} / {item._embedded.venues[0].state.name}) </PlaceDescription>
                    <ArrowHiddenIcon className="material-icons">&#xE317;</ArrowHiddenIcon>
                </DescriptionTitle>
                <ResultDescriptionPCont> 
                  <ResultDescription_P>
                     {item._embedded.attractions[0].name} will be performing at
                     {item._embedded.venues[0].name}
                     
                  </ResultDescription_P>
                </ResultDescriptionPCont>
            </ResultDescriptionWrap>
                 {/*<Wrapper>
        <RepoLink href={item._embedded.venues[0].url} target="_blank">
          {nameprefix + item._embedded.venues[0].name}
        </RepoLink>
        <IssueLink href={`${item.html_url}/issues`} target="_blank">
          <IssueIcon />
          <FormattedNumber value={item.open_issues_count} />
        </IssueLink>
      </Wrapper>*/}
        </Container>








      /*<Wrapper>
        <RepoLink href={item._embedded.venues[0].url} target="_blank">
          {nameprefix + item._embedded.venues[0].name}
        </RepoLink>
        <IssueLink href={`${item.html_url}/issues`} target="_blank">
          <IssueIcon />
          <FormattedNumber value={item.open_issues_count} />
        </IssueLink>
      </Wrapper>*/
    );

    // Render the content into a list item
    return (
      <ListItem key={`repo-list-item-${item._embedded.events}`} item={content} />
    );
  }
}

RepoListItem.propTypes = {
  item: React.PropTypes.object,
  currentUser: React.PropTypes.string,
};

export default connect(createStructuredSelector({
  currentUser: makeSelectCurrentUser(),
}))(RepoListItem);