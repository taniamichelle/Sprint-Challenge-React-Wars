import React from 'react';
// import { Card, Photo } from 'semantic-ui-react';
import { StyledDiv } from './Styled';
import luke from "../images/luke.jpeg";
import c3po from "../images/c3po.jpg";
import r2d2 from "../images/r2d2.jpeg";
import darthV from "../images/darthVader.jpeg";
import leia from "../images/leia.jpeg";
import owen from "../images/owen.jpeg";
import beru from "../images/beru.jpeg";
import r5d4 from "../images/r5d4.jpeg";
import biggs from "../images/biggs.png";
import obiWan from "../images/obiWan.png";



export const Luke = () => {
    return (
        <StyledDiv>
            <div className="luke-container">
                <img className='luke' src={luke} alt='Luke SkyWalker' />
            </div>
        </StyledDiv>
    );
};

export const C3po = () => {
    return (
        <StyledDiv>
            <div className="c3po-container">
                <img className='c3po' src={c3po} alt='c3po' />
            </div>
        </StyledDiv>
    );
};

export const R2d2 = () => {
    return (
        <StyledDiv>
            <div className="r2d2-container">
                <img className='r2d2' src={r2d2} alt='r2d2' />
            </div>
        </StyledDiv>
    );
};

export const DarthV = () => {
    return (
        <StyledDiv>
            <div className="darthV-container">
                <img className='darthV' src={darthV} alt='darthV' />
            </div>
        </StyledDiv>
    );
};

export const Leia = () => {
    return (
        <StyledDiv>
            <div className="leia-container">
                <img className='leia' src={leia} alt='leia' />
            </div>
        </StyledDiv>
    );
};

export const Owen = () => {
    return (
        <StyledDiv>
            <div className="owen-container">
                <img className='owen' src={owen} alt='owen' />
            </div>
        </StyledDiv>
    );
};

export const Beru = () => {
    return (
        <StyledDiv>
            <div className="beru-container">
                <img className='beru' src={beru} alt='beru' />
            </div>
        </StyledDiv>

    );
};

export const R5d4 = () => {
    return (
        <StyledDiv>
            <div className="r5d4-container">
                <img className='r5d4' src={r5d4} alt='r5d4' />
            </div>
        </StyledDiv>
    );
};

export const Biggs = () => {
    return (
        <StyledDiv>
            <div className="biggs-container">
                <img className='biggs' src={biggs} alt='biggs' />
            </div>
        </StyledDiv>
    );
};

export const ObiWan = () => {
    return (
        <StyledDiv>
            <div className="obiWan-container">
                <img className='obiWan' src={obiWan} alt='obiWan' />
            </div>
        </StyledDiv>
    );
};
