import React from 'react';
import PaginationLink from './PaginationLink'
import { navigate } from '@reach/router'

const PaginationBar = ({currentPageNumber, sneakerGridRef}) => {


    const scrollToTopOfPage = () => {
        window.scrollTo({
            top: (0, 0)
        });
        window.scrollTo({
          top: sneakerGridRef.current.scrollTo(0, 0),
          behavior: "smooth"
        });
    }

    
   const handleNextPageButton = () => {
        if (currentPageNumber >= 16) {
            console.log("VOID")
        } else if (currentPageNumber >= 1) {
            navigate(`/sneakers/page/${(parseInt(currentPageNumber)) + 1}`)
        }
    }


    const handlePreviousPageButton = () => {
        if (currentPageNumber <= 1) {
            console.log("VOID")
        } else {
            navigate(`/sneakers/page/${currentPageNumber - 1}`)
        }
    }

    return (
        <nav className="pagination container" role="navigation" aria-label="pagination">
        <button onClick={handlePreviousPageButton} className="pagination-previous" title="This is the first page" >
            Previous
        </button>
        <button onClick={handleNextPageButton} className="pagination-next">Next page</button>
        <button onClick={scrollToTopOfPage} className="button is-danger pagination-next">Back To Top <br /><i className="fas fa-arrow-up"></i>

</button>
        <ul className="pagination-list">
            <li>
            <PaginationLink to="/sneakers/page/1" className="pagination-link">
                1
            </PaginationLink>
            </li>
            <li>
            <PaginationLink to="/sneakers/page/2" className="pagination-link">
                2
            </PaginationLink>
            </li>
            <li>
            <PaginationLink to="/sneakers/page/3" className="pagination-link">
                3
            </PaginationLink>
            </li>
            <li>
            <PaginationLink to="/sneakers/page/4" className="pagination-link">
                4
            </PaginationLink>
            </li>
            <li>
            <PaginationLink to="/sneakers/page/5" className="pagination-link">
                5
            </PaginationLink>
            </li>
            <li>
            <PaginationLink to="/sneakers/page/6" className="pagination-link">
                6
            </PaginationLink>
            </li>
            <li>
            <PaginationLink to="/sneakers/page/7" className="pagination-link">
                7
            </PaginationLink>
            </li>
            <li>
            <PaginationLink to="/sneakers/page/8" className="pagination-link">
                8
            </PaginationLink>
            </li>
            <li>
            <PaginationLink to="/sneakers/page/9" className="pagination-link">
                9
            </PaginationLink>
            </li>
            <li>
            <PaginationLink to="/sneakers/page/10" className="pagination-link">
                10
            </PaginationLink>
            </li>
            <li>
            <PaginationLink to="/sneakers/page/11" className="pagination-link">
                11
            </PaginationLink>
            </li>
            <li>
            <PaginationLink to="/sneakers/page/12" className="pagination-link">
                12
            </PaginationLink>
            </li>
            <li>
            <PaginationLink to="/sneakers/page/13" className="pagination-link">
                13
            </PaginationLink>
            </li>
            <li>
            <PaginationLink to="/sneakers/page/14" className="pagination-link">
                14
            </PaginationLink>
            </li>
            <li>
            <PaginationLink to="/sneakers/page/15" className="pagination-link">
                15
            </PaginationLink>
            </li>
            <li>
            <PaginationLink to="/sneakers/page/16" className="pagination-link">
                16
            </PaginationLink>
            </li>
        </ul>
        </nav>

    )
}

export default PaginationBar;