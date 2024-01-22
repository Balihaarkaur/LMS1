// BookInventory.js

import React, { useState } from "react";

const BookInventory = () => {
    const [searchInput, setSearchInput] = useState("");

    const filterTable = () => {
        var input, filter, table, tr, td, i, txtValue;
        input = document.getElementById('searchInput');
        filter = input.value.toUpperCase();
        table = document.getElementById('dataTable');
        tr = table.getElementsByTagName('tr');

        for (i = 0; i < tr.length; i++) {
            td = tr[i].getElementsByTagName('td')[0]; 
            if (td) {
                txtValue = td.textContent || td.innerText;
                if (txtValue.toUpperCase().indexOf(filter) > -1) {
                    tr[i].style.display = '';
                } else {
                    tr[i].style.display = 'none';
                }
            }
        }
    };

    const handleInputChange = (e) => {
        setSearchInput(e.target.value);
        filterTable();
    };

    return (
        <div>
            <div className="header">
                <h1>Book Entries</h1>
                <p>(Your guide to finding books in the library)</p>
            </div>

            <div className="section">
                <input
                    type="text"
                    id="searchInput"
                    placeholder="Search..."
                    value={searchInput}
                    onChange={handleInputChange}
                />

                <table id="dataTable">
                    <thead>
                        <tr>
                            <th>Title</th>
                            <th>Author</th>
                            <th>Shelf no.</th>
                            <th>Language</th>
                            <th>ISBN</th>
                            <th>Genre</th>
                        </tr>
                    </thead>
                    <tbody>
                    
                        <tr>
                            <td>A Tale of Two Cities</td>
                            <td>Charles Dickens</td>
                            <td>607</td>
                            <td>English</td>
                            <td>45678</td>
                            <td>Historical fiction</td>
                        </tr>

                        <tr>
                            <td>The Little Prince</td>
                            <td>Antoine de Saint-Exupéry</td>
                            <td>618</td>
                            <td>French</td>
                            <td>78905</td>
                            <td>Fantasy</td>
                        </tr>
                        <tr>
                            <td>It ends with us</td>
                            <td>Coolen Hover</td>
                            <td>512</td>
                            <td>English</td>
                            <td>25456</td>
                            <td>Romance</td>
                        </tr>
                        <tr>
                            <td>It starts with us</td>
                            <td>Coolen Hover</td>
                            <td>512</td>
                            <td>English</td>
                            <td>87654</td>
                            <td>Romance</td>
                        </tr>
                        <tr>
                            <td>Thirteen Reasons Why</td>
                            <td>Jay Asher</td>
                            <td>618</td>
                            <td>English</td>
                            <td>24512</td>
                            <td>Thriller</td>
                        </tr>
                        <tr>
                            <td>Turtles Far Away Down</td>
                            <td>John Green</td>
                            <td>421</td>
                            <td>English</td>
                            <td>78906</td>
                            <td>Fiction</td>
                        </tr>
                        <tr>
                            <td>Harry Potter</td>
                            <td>J.K Rowling</td>
                            <td>624</td>
                            <td>English</td>
                            <td>24566</td>
                            <td>Fiction</td>
                        </tr>
                        <tr>
                            <td>To Kill A Mocking Bird</td>
                            <td>Harper Lee</td>
                            <td>630</td>
                            <td>English</td>
                            <td>45660</td>
                            <td>Drama</td>
                        </tr>
                        <tr>
                            <td>The Monk Who Sold His Ferrari</td>
                            <td>Robin S. Sharma</td>
                            <td>612</td>
                            <td>English</td>
                            <td>45331</td>
                            <td>Self Help</td>
                        </tr>






                        <tr>
                            <td>The Kite Runner</td>
                            <td>Khalid Hosseini</td>
                            <td>370</td>
                            <td>Hindi</td>
                            <td>71625</td>
                            <td>Historical fiction</td>

                        </tr>




                        <tr>
                            <td>The Shack</td>
                            <td>William P. Young</td>
                            <td>800</td>
                            <td>English</td>
                            <td>98285</td>
                            <td>Thriller</td>
                        </tr>
                        <tr>
                            <td>The Women's Room</td>
                            <td>Marilyn French</td>
                            <td>345</td>
                            <td>English</td>
                            <td>11034</td>
                            <td>Feminist Novel</td>
                        </tr>
                        <tr>
                            <td>Totto-Chan: The Little Girl at the Window (窓ぎわのトットちゃん)</td>
                            <td>Tetsuko Kuroyanagi</td>
                            <td>453</td>
                            <td>Japanese</td>
                            <td>89222</td>
                            <td>Autobiographical novel</td>
                        </tr>
                        <tr>
                            <td>Love Story</td>
                            <td>Erich Segal</td>
                            <td>780</td>
                            <td>spanish</td>
                            <td>77530</td>
                            <td>Romance</td>
                        </tr>
                        <tr>
                            <td>War and Peace (Война и мир)</td>
                            <td>Leo Tolstoy</td>
                            <td>509</td>
                            <td>Russian</td>
                            <td>60547</td>
                            <td>Drama</td>
                        </tr>

                        <tr>
                            <td>The Ginger Man</td>
                            <td>J. P. Donleavy</td>
                            <td>610</td>
                            <td>English</td>
                            <td>95623</td>
                            <td>Novel</td>
                        </tr>



                        <tr>
                            <td>Ikigai</td>
                            <td>25</td>
                            <td>786</td>
                            <td>English</td>
                            <td>45678</td>
                            <td>Self Help</td>
                        </tr>
                        <tr>
                            <td>Peter Pan</td>
                            <td>JM Barrie</td>
                            <td>163</td>
                            <td>English</td>
                            <td>75368</td>
                            <td>Adventure</td>
                        </tr>
                        <tr>
                            <td>The Hobbit</td>
                            <td>J.R.R.Tolkien</td>
                            <td>749</td>
                            <td>English</td>
                            <td>45236</td>
                            <td>Fantasy</td>
                        </tr>
                        <tr>
                            <td>Dream of the Red Chamber (紅樓夢)</td>
                            <td>Cao Xueqin</td>
                            <td>890</td>
                            <td>Chinese</td>
                            <td>45635</td>
                            <td>Family Saga</td>
                        </tr>
                        <tr>
                            <td>The Perfect Us</td>
                            <td>Durjoy Datta</td>
                            <td>123</td>
                            <td>English</td>
                            <td>88592</td>
                            <td>Romance</td>
                        </tr>
                        <tr>
                            <td>The Da Vinci Code</td>
                            <td>Dan Brown</td>
                            <td>194</td>
                            <td>English</td>
                            <td>92188</td>
                            <td>Mystery Thriller</td>
                        </tr>
                        <tr>
                            <td>Black Beauty</td>
                            <td>Anna Sewell</td>
                            <td>550</td>
                            <td>English</td>
                            <td>82648</td>
                            <td>Fiction</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default BookInventory;
