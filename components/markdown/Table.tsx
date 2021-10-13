import * as React from 'react';
import { Spacer } from '@1milligram/design';

const Table = (props) => (
    <>
        <Spacer size="small" />
        <table className="mgd-table mgd-table--fixed">{props.children}</table>
        <Spacer size="small" />
    </>
);

export default Table;
