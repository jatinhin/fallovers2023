import React from 'react';

  function Pagging(props) {

return (

<div className="col-sm-12 col-md-12 d-flex align-items-center justify-content-center justify-content-md-end">
<div className="dataTables_paginate paging_simple_numbers">
    <ul className="pagination">
        <li className="paginate_button page-item previous disabled">
            <a href="#" aria-controls="kt_customers_table" data-dt-idx={0} tabIndex={0} className="page-link">
                <i className="previous" /></a>
                </li>
            <li className="paginate_button page-item active">
            <a href="#" aria-controls="kt_customers_table" data-dt-idx={1} tabIndex={0} className="page-link">1</a>
            </li>
            <li className="paginate_button page-item ">
            <a href="#" aria-controls="kt_customers_table" data-dt-idx={2} tabIndex={0} className="page-link">2</a></li>
            <li className="paginate_button page-item ">
                <a href="#" aria-controls="kt_customers_table" data-dt-idx={3} tabIndex={0} className="page-link">3</a></li>
            <li className="paginate_button page-item "><a href="#" aria-controls="kt_customers_table" data-dt-idx={4} tabIndex={0} className="page-link">4</a></li>
            <li className="paginate_button page-item next">
            <a href="#" aria-controls="kt_customers_table" data-dt-idx={5} tabIndex={0} className="page-link"><i className="next" /></a>
            </li>
            </ul>
            </div>
        </div>

  )
}

export default Pagging
