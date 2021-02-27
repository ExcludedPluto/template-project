import styled, { css } from 'styled-components'

/*
  props
    align
    color
    border
*/

//TODO: 반응형 추가 후 수치들 theme로 조정
const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: ${props => {
    if (props.align === 'left')
      return 'flex-start'
    else if (props.align === 'right')
      return 'flex-end'
    return props.align || 'center'
  }};

  min-width: 236px !important; /* wrapper가 최대 width(1200)일 때 4등분 시 width */
  margin: 0 16px;
  padding-top: 32px;
  padding-bottom: 32px;

  background: ${props => props.color || 'none'};
  ${props => props.border &&
    css`
      border: 1px solid ${props => props.theme.color[props.border]};
    `}
  border-radius: 8px;

  & > *:not(:last-child) {
    margin-bottom: ${props => props.mb || "16px"};
  }

  /* Card가 한개일 때 */
  &:first-child:nth-last-child(1) {
    width: 100%;
    padding-left: 128px;
    padding-right: 128px;
  }

  /* Card가 두개일 때 */
  &:first-child:nth-last-child(2),
  &:first-child:nth-last-child(2) ~ & {
    width: 30%;
    padding-left: 64px;
    padding-right: 64px;
  }

  /* Card가 세개일 때 */
  &:first-child:nth-last-child(3),
  &:first-child:nth-last-child(3) ~ & {
    width: 33.3333%;
    padding-left: 32px;
    padding-right: 32px;
  }

  /* Card가 네개일 때 */
  &:first-child:nth-last-child(4),
  &:first-child:nth-last-child(4) ~ & {
    width: 25%;
    padding-left: 16px;
    padding-right: 16px;
  }
`

export default Card