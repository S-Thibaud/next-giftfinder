const testform = () => {
  return (
    //container
    <div className="w-70 mx-15 bg-black h-550 rounded-5 overflow-hidden rounded-xl">
      <form action="categorieen.php" method="POST">
        <ul className="flex w-70 relative top-30 list-none justify-around mx-auto">
          <li
            id="one"
            className="bg-white border-1.5 border-gray-400 text-black"
          >
            1
          </li>
          <div
            className="h-3 w-45 bg-white opacity-30 relative top-20 transition duration-500 ease-in-out"
            id="line1"
          ></div>
          <li
            id="two"
            className="bg-white opacity-30 border-1.5 border-gray-400 text-black"
          >
            2
          </li>
          <div
            className="h-3 w-45 bg-white opacity-30 relative top-20 transition duration-500 ease-in-out"
            id="line2"
          ></div>
          <li
            id="three"
            className="bg-white opacity-30 border-1.5 border-gray-400 text-black"
          >
            3
          </li>
        </ul>

        <div id="ageform" class="paginadivs">
          <div class="row">
            <div class="leeftijdlinks">
              <label for="Age">
                <h1 class="formtitle">Leeftijd</h1>
              </label>
              <div class="containerp1">
                <div class="rownomargin">
                  <div class="inputsp1">
                    <h3>0-6</h3>
                    <input
                      class="radiosp1"
                      type="radio"
                      name="age"
                      value="3"
                      required
                    />
                  </div>
                  <div class="inputsp1">
                    <h3>6-12</h3>
                    <input
                      class="radiosp1"
                      type="radio"
                      name="age"
                      value="9"
                      required
                    />
                  </div>
                  <div class="inputsp1">
                    <h3>12-16</h3>
                    <input
                      class="radiosp1"
                      type="radio"
                      name="age"
                      value="14"
                      required
                    />
                  </div>
                  <div class="inputsp1">
                    <h3>16-18</h3>
                    <input
                      class="radiosp1"
                      type="radio"
                      name="age"
                      value="17"
                      required
                    />
                  </div>
                  <div class="inputsp1">
                    <h3>18-44</h3>
                    <input
                      class="radiosp1"
                      type="radio"
                      name="age"
                      value="31"
                      required
                    />
                  </div>
                  <div class="inputsp1">
                    <h3>45+</h3>
                    <input
                      class="radiosp1"
                      type="radio"
                      name="age"
                      value="45"
                      required
                    />
                  </div>
                </div>
              </div>
            </div>

            <div class="relatierechts">
              <label for="gender">
                <h1 class="formtitle">Geslacht</h1>
              </label>
              <div class="containerp1">
                <div class="rownomargin">
                  <input
                    class="radiosp1 elementform"
                    type="radio"
                    name="gender"
                    value="M"
                  />
                  <h3 class="elementform">Man</h3>
                </div>
                <div class="rownomargin">
                  <input
                    class="radiosp1 elementform"
                    type="radio"
                    name="gender"
                    value="V"
                  />
                  <h3 class="elementform">Vrouw</h3>
                </div>
                <div class="rownomargin">
                  <input
                    class="radiosp1 elementform"
                    type="radio"
                    name="gender"
                    value="null"
                  />
                  <h3 class="elementform">X</h3>
                </div>
              </div>
            </div>
          </div>
          <div class="buttonbottom">
            <button type="button" class="next" onclick="categoriefunction()">
              Volgende
            </button>
          </div>
        </div>

        <div id="categorieform" class="paginadivs">
          <div class="row">
            <div class="categoriesboven">
              <h1 class="formtitle">Categorieën</h1>
              <div class="row">
                <div class="categoriesformselect">
                  <button class="collapsible" type="button">
                    Boeken
                  </button>
                  <div class="content">
                    <div class="rownomargin">
                      <input
                        class="floatleft"
                        type="checkbox"
                        value="Novels"
                        name="subcategories[]"
                      />
                      <h4 class="floatleft">Novels</h4>
                    </div>
                    <div class="rownomargin">
                      <input
                        class="floatleft"
                        type="checkbox"
                        value="Thrillers"
                        name="subcategories[]"
                      />
                      <h4 class="floatleft">Thrillers</h4>
                    </div>
                    <div class="rownomargin">
                      <input
                        class="floatleft"
                        type="checkbox"
                        value="Fantasy"
                        name="subcategories[]"
                      />
                      <h4 class="floatleft">Fantasy</h4>
                    </div>
                  </div>
                  <button class="collapsible" type="button">
                    Sport
                  </button>
                  <div class="content">
                    <div class="rownomargin">
                      <input
                        class="floatleft"
                        type="checkbox"
                        value="soccer"
                        name="subcategories[]"
                      />
                      <h4 class="floatleft">Voetbal</h4>
                    </div>
                    <div class="rownomargin">
                      <input
                        class="floatleft"
                        type="checkbox"
                        value="basketball"
                        name="subcategories[]"
                      />
                      <h4 class="floatleft">Basketbal</h4>
                    </div>
                    <div class="rownomargin">
                      <input
                        class="floatleft"
                        type="checkbox"
                        value="skateboarding"
                        name="subcategories[]"
                      />
                      <h4 class="floatleft">Skateboarden</h4>
                    </div>
                  </div>
                  <button class="collapsible" type="button">
                    Games
                  </button>
                  <div class="content">
                    <div class="rownomargin">
                      <input
                        class="floatleft"
                        type="checkbox"
                        value="fighting"
                        name="subcategories[]"
                      />
                      <h4 class="floatleft">Fighting</h4>
                    </div>
                    <div class="rownomargin">
                      <input
                        class="floatleft"
                        type="checkbox"
                        value="platformer"
                        name="subcategories[]"
                      />
                      <h4 class="floatleft">Platformer</h4>
                    </div>
                    <div class="rownomargin">
                      <input
                        class="floatleft"
                        type="checkbox"
                        value="racing"
                        name="subcategories[]"
                      />
                      <h4 class="floatleft">Racing</h4>
                    </div>
                  </div>
                </div>
                <div class="categoriesformselect">
                  <button class="collapsible" type="button">
                    Speelgoed
                  </button>
                  <div class="content">
                    <div class="rownomargin">
                      <input
                        class="floatleft"
                        type="checkbox"
                        value="dolls"
                        name="subcategories[]"
                      />
                      <h4 class="floatleft">Poppen</h4>
                    </div>
                    <div class="rownomargin">
                      <input
                        class="floatleft"
                        type="checkbox"
                        value="outdoor playsets"
                        name="subcategories[]"
                      />
                      <h4 class="floatleft">Buiten speelsets</h4>
                    </div>
                    <div class="rownomargin">
                      <input
                        class="floatleft"
                        type="checkbox"
                        value="plush toys"
                        name="subcategories[]"
                      />
                      <h4 class="floatleft">Plush speelgoed</h4>
                    </div>
                  </div>
                  <button class="collapsible" type="button">
                    Dieren
                  </button>
                  <div class="content">
                    <div class="rownomargin">
                      <input
                        class="floatleft"
                        type="checkbox"
                        value="dogs"
                        name="subcategories[]"
                      />
                      <h4 class="floatleft">Honden</h4>
                    </div>
                    <div class="rownomargin">
                      <input
                        class="floatleft"
                        type="checkbox"
                        value="cats"
                        name="subcategories[]"
                      />
                      <h4 class="floatleft">Katten</h4>
                    </div>
                    <div class="rownomargin">
                      <input
                        class="floatleft"
                        type="checkbox"
                        value="hamsters"
                        name="subcategories[]"
                      />
                      <h4 class="floatleft">Hamsters</h4>
                    </div>
                    <div class="rownomargin">
                      <input
                        class="floatleft"
                        type="checkbox"
                        value="rabbits"
                        name="subcategories[]"
                      />
                      <h4 class="floatleft">Konijnen</h4>
                    </div>
                  </div>
                  <button class="collapsible" type="button">
                    Kledij
                  </button>
                  <div class="content">
                    <div class="rownomargin">
                      <input
                        class="floatleft"
                        type="checkbox"
                        value="hoodie"
                        name="subcategories[]"
                      />
                      <h4 class="floatleft">Hoodie</h4>
                    </div>
                    <div class="rownomargin">
                      <input
                        class="floatleft"
                        type="checkbox"
                        value="dress"
                        name="subcategories[]"
                      />
                      <h4 class="floatleft">Jurk</h4>
                    </div>
                    <div class="rownomargin">
                      <input
                        class="floatleft"
                        type="checkbox"
                        value="tshirt"
                        name="subcategories[]"
                      />
                      <h4 class="floatleft">T-shirt</h4>
                    </div>
                    <div class="rownomargin">
                      <input
                        class="floatleft"
                        type="checkbox"
                        value="jacket"
                        name="subcategories[]"
                      />
                      <h4 class="floatleft">Jassen</h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="buttonbottom">
            <button type="button" class="previous" onclick="agefunction()">
              Vorige
            </button>
            <button type="button" class="next" onclick="pricefunction()">
              Volgende
            </button>
          </div>
        </div>

        <div id="priceform" class="paginadivs">
          <div class="row">
            <div class="prijsboven">
              <h1 class="formtitle">Prijs</h1>
              <div class="row">
                <div class="pricesform">
                  <h2 class="formtitle">Min.</h2>
                  <div class="rownomargin">
                    <h2 class="floatleft" id="minprice"></h2>
                    <h2 class="floatleft">€</h2>
                  </div>
                </div>
                <div class="pricesform">
                  <h2 class="formtitle">Max.</h2>
                  <div class="rownomargin">
                    <h2 class="floatleft" id="maxprice"></h2>
                    <h2 class="floatleft">€</h2>
                  </div>
                </div>
              </div>
              <div class="middle">
                <div class="multi-range-slider">
                  <input
                    type="range"
                    id="input-left"
                    min="0"
                    max="100"
                    value="0"
                    name="input-left"
                  />
                  <input
                    type="range"
                    id="input-right"
                    min="0"
                    max="100"
                    value="100"
                    name="input-right"
                  />
                  <div class="slider">
                    <div class="track"></div>
                    <div class="range"></div>
                    <div class="thumb left"></div>
                    <div class="thumb right"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="buttonbottom">
            <button
              type="button"
              class="previous"
              onclick="categoriefunction()"
            >
              Vorige
            </button>
            <input type="submit" id="submit" name="searchbutton" />
          </div>
        </div>
      </form>
    </div>
  );
};

export default testform;
