const MainForm = () => {
  return (
    <div className="w-70 mx-15 bg-black h-550 rounded-5 overflow-hidden rounded-xl">
      <form action="" method="POST">
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

        <div id="ageform" className="absolute top-30 h-auto">
          <div className="clear-both overflow-auto mt-8">
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

      </form>
    </div>
  );
};

export default MainForm;
