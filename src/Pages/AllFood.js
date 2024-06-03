// import React, { useState } from 'react'
// import Helmet from '../Components/Helmet'
// import CommonSection from '../Components/CommonSection'
// import ProductCard from './Category/ProductCard'
// import products from '../Fake-data/products'
// import ReactPaginate from 'react-paginate'


// export default function AllFood() {

//   const [pageNumber,setPageNumber] = useState(0);//1, 2
//   const ProductPerPage = 8;//6
//   const VisitedProduct = pageNumber * ProductPerPage ;// 1*6 = 6, 2*6 = 12
//   const displayProduct = products.slice(VisitedProduct, VisitedProduct + ProductPerPage)//(6,12), (12,18)

//   const PageCount = Math.ceil(products.length / ProductPerPage)

//   const ChangePage = ({selected}) =>{
//     setPageNumber(selected)
//   }
  
//   //search product variable
//   const [ searchProduct , setSearchProduct ] = useState('')
//   return <Helmet title='All Food'>
//     <section>
//       <CommonSection title='All Food'></CommonSection>
//     </section>
  
//     <section className='container mt-5'>
//         <div className='justify-content-between d-flex'>
//           <div className=''>
//             <input type='text' onChange={(e) => setSearchProduct(e.target.value)} placeholder='looking for....' ></input>
//           </div>
//           <div>
//             <div className='rounded-1'>
//               <select className='pe-4 '>
//                 <option value="Default">Default</option>
//                 <option value="Alphabetically, A-Z">Alphabetically, A-Z</option>
//                 <option value="Alphabetically, Z-A">Alphabetically, Z-A</option>
//                 <option value="High Price">High Price</option>
//                 <option value="Low Price">Low Price</option>
//               </select>
//             </div>
//           </div>
//         </div>
//       </section>
    
//       {/* home file mati all products ni map methode copy kari(section-4) bas all product ni jagyae products par map mathode chalavani all remove kari devanu */}
//       {<section className='container mt-5'>
//         <div className=' row g-3'>
//           {
//             (searchProduct === '' ? displayProduct : products.filter((item) => {
//               if(item.title.toLowerCase().includes(searchProduct.toLowerCase()))
//                 return item;
//               })).map((item) => {
//               return <div className="col-lg-3 col-md-6 col-12" key={item.id}>
//                 <ProductCard productsitem={item}></ProductCard>
//               </div>
//             })
//           }
//         </div>
//         <div className='mt-5'>
//           <ReactPaginate pageCount={PageCount} onPageChange={ChangePage} containerClassName='paginationBttns'></ReactPaginate>
//         </div>
//       </section> }
//   </Helmet>
// }

import React, { useState } from 'react'
import Helmet from '../Components/Helmet'
import CommonSection from '../Components/CommonSection'
import ProductCard from './Category/ProductCard'
import products from '../Fake-data/products'
import ReactPaginate from 'react-paginate'

function Allfood() {
  const [pageNumber, setPageNumber] = useState(0);
  const [searchProduct, setSearchProduct] = useState('');
  const [sortOption, setSortOption] = useState('default');
  
  const productsPerPage = 4;
  const visitedProducts = pageNumber * productsPerPage;
  
  const handlePageChange = ({ selected }) => {
    setPageNumber(selected);
  };

  const handleSearch = (e) => {
    setSearchProduct(e.target.value);
    setPageNumber(0); // Reset page number when search changes
  };

  const sortedProducts = [...products].sort((a, b) => {
    switch (sortOption) {
      case '1':
        return a.title.localeCompare(b.title);
      case '2':
        return b.title.localeCompare(a.title);
      case '3':
        return b.price - a.price;
      case '4':
        return a.price - b.price;
      default:
        return 0;
    }
  });

  // search product
  const filteredProducts = sortedProducts.filter((item) =>
    item.title.toLowerCase().includes(searchProduct.toLowerCase())
  );

  const pageCount = Math.ceil(filteredProducts.length / productsPerPage);

  const displayedProducts = filteredProducts.slice(
    visitedProducts,
    visitedProducts + productsPerPage
  );

  return (
    <Helmet title="Allfood">
      <div>
        <CommonSection title="All Food" />
        <section className='container my-5'>
          <div className='justify-content-between d-flex'>
            <div>
              <div className="input-group flex-nowrap">
                <input
                  type="text"
                  className="form-control"
                  placeholder="I'm looking for...."
                  aria-label="Search"
                  aria-describedby="addon-wrapping"
                  value={searchProduct}
                  onChange={handleSearch}
                />
                <span className="material-symbols-outlined input-group-text bg-light" id="addon-wrapping">search</span>
              </div>
            </div>
            <div>
              <select
                className="form-select"
                aria-label="Default select example"
                onChange={(e) => setSortOption(e.target.value)}
              >
                <option value="default">Default</option>
                <option value="1">Alphabetically, A-Z</option>
                <option value="2">Alphabetically, Z-A</option>
                <option value="3">High Price</option>
                <option value="4">Low Price</option>
              </select>
            </div>
          </div>
          <div className='row'>
            {
              displayedProducts.map((item) => (
                <div className='col-lg-3 col-md-6 col-sm-12 col-12' key={item.id}>
                  <ProductCard productsitem={item} />
                </div>
              ))
            }
          </div>
          <div>
            <ReactPaginate
              pageCount={pageCount}
              containerClassName='paginations-buttons'
              onPageChange={handlePageChange}
            />
          </div>
        </section>
      </div>
    </Helmet>
  );
}

export default Allfood;
