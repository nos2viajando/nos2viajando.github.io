var attractions = [
  [[-46.640165, -22.700645], 'BR', 'Cachoeira do Sol'],
  [[-46.644647, -22.674067], 'BR', 'Fazenda Salmo 23'],
  [[-50.809309, -29.363867], 'BR', 'Catedral de Pedra'],
  [[-50.851944, -29.312842], 'BR', 'Parque do Caracol'],
  [[-50.777217, -29.331164], 'BR', 'Vale da Ferradura'],
  [[-50.873687, -29.285703], 'BR', 'Parque dos Paredões'],
  [[-50.834335, -29.350026], 'BR', 'Parque Pinheiro Grosso'],
  [[-50.834855, -29.394421], 'BR', 'Ecoparque Sperry'],
  [[-50.078375, -29.159675], 'BR', 'Canyon Itaimbezinho'],
  [[-50.877577, -29.394294], 'BR', 'Lago Negro'],
  [[-50.794848, -29.372454], 'BR', 'Parque das Sequoias'],
  [[-50.737633, -29.274653], 'BR', 'Parque da Cachoeira'],
  [[-50.850079, -29.335549], 'BR', 'Castelinho Caracol'],
  [[-54.434538, -25.692903], 'BR', 'Cataratas do Iguaçu'],
  [[-54.590744, -25.594784], 'AR', 'Marco das Três Fronteiras'],
  [[-54.440813, -25.690880], 'AR', 'Cataratas do Iguaçu'],
  [[-54.437490, -25.695362], 'AR', 'Mirante da Garganta do Diabo'],
  [[-54.482174, -25.613405], 'BR', 'Voo de Helicóptero sobre as Cataratas'],
  [[-54.482363, -25.613652], 'BR', 'Parque das Aves'],
  [[-54.588548, -25.407994], 'BR', 'Usina Hidrelétrica de Itaipú'],
  [[-54.457834, -25.648383], 'BR', 'Macuco Safari'],
  [[-47.711117, -22.121222], 'BR', 'Gruta do Índio'],
  [[-122.422945, 37.826665], 'US', 'Presídio de Alcatraz'],
  [[-122.410418, 37.811144], 'US', 'Fisherman\'s Wharf'],
  [[-122.415363, 37.805335], 'US', 'Bonde de São Francisco'],
  [[-122.478253, 37.819938], 'US', 'Ponte Golden Gate'],
  [[-121.901712, 36.371537], 'US', 'Ponte Bixby Creek'],
  [[-121.902742, 36.357429], 'US', 'Hurricane Point'],
  [[-119.677483, 37.715824], 'US', 'Tunnel View'],
  [[-119.595757, 37.749948], 'US', 'Yosemite Falls'],
  [[-119.648578, 37.717472], 'US', 'Braidalveil Fall'],
  [[-119.549442, 37.747752], 'US', 'Mirror Lake'],
  [[-119.573643, 37.730464], 'US', 'Glacier Point'],
  [[-119.544228, 37.726578], 'US', 'Vernal Fall'],
  [[-119.586848, 37.748544], 'US', 'Ansel Adams Gallery'],
  [[-118.751445, 36.581725], 'US', 'General Sherman Tree'],
  [[-122.070689, 37.417284], 'US', 'Museu da História do Computador'],
  [[-122.088013, 37.418436], 'US', 'Praça das Estátuas do Android'],
  [[-32.398248, -3.834981], 'BR', 'Mirante Buraco da Raquel'],
  [[-32.431141, -3.846836], 'BR', 'Mirante Forte do Boldró'],
  [[-32.446763, -3.858239], 'BR', 'Mirante dos Golfinhos'],
  [[-32.410139, -3.837930], 'BR', 'Forte de Nossa Senhora dos Remédios'],
  [[12.454642, 41.904746], 'VA', 'Museus do Vaticano'],
  [[12.454479, 41.902965], 'VA', 'Capela Sistina'],
  [[12.453930, 41.906293], 'VA', 'Escadaria Bramante'],
  [[12.457334, 41.902255], 'VA', 'Praça de São Pedro'],
  [[12.461570, 41.902114], 'IT', 'Museu Leonardo da Vinci Experience'],
  [[12.492231, 41.890210], 'IT', 'Coliseu'],
  [[12.492461, 41.879030], 'IT', 'Termas de Caracala'],
  [[12.488685, 41.884290], 'IT', 'Circo Massimo'],
  [[12.486326, 41.890891], 'IT', 'Palatino e Fórum Romano'],
  [[12.476862, 41.898611], 'IT', 'Panteão'],
  [[12.483305, 41.900878], 'IT', 'Fontana di Trevi'],
  [[15.978659, 45.806362], 'HR', 'Fontana kralja Tomislava'],
  [[15.977287, 45.813115], 'HR', 'Praça Jelačić'],
  [[15.973109, 45.814313], 'HR', 'Funicular de Zagreb'],
  [[15.973635, 45.816347], 'HR', 'Igreja de São Marcos'],
  [[15.979790, 45.814501], 'HR', 'Catedral de Zagreb'],
  [[15.607950, 44.902356], 'HR', 'Velik Slap'],
  [[15.228539, 44.112217], 'HR', 'Land Gate'],
  [[15.219877, 44.117212], 'HR', 'Orgão do Mar'],
  [[15.964000, 43.805218], 'HR', 'Skradinski Buk'],
  [[15.973333, 43.861171], 'HR', 'Ilha de Visovac'],
  [[15.889101, 43.735667], 'HR', 'Catedral de São Tiago'],
  [[15.854655, 43.721561], 'HR', 'Forte de São Nicolau'],
  [[16.440275, 43.508581], 'HR', 'Palácio de Diocleciano'],
  [[16.438122, 43.507783], 'HR', 'Riva'],
  [[18.107216, 42.641717], 'HR', 'Pile Gate'],
  [[18.111725, 42.643098], 'HR', 'Teleférico de Dubrovnik'],
  [[18.111458, 42.649525], 'HR', 'Monte Srđ'],
  [[18.109520, 42.641246], 'HR', 'Stradun'],
  [[18.104090, 42.640994], 'HR', 'Forte de Lovrijenac'],
  [[18.110638, 42.640335], 'HR', 'Palácio do Reitor'],
  [[18.112295, 42.639902], 'HR', 'Muralhas de Dubrovnik'],
  [[18.112498, 42.640104], 'HR', 'Museu Marítimo de Dubrovnik'],
  [[18.122144, 42.625386], 'HR', 'Ilha Lokrum'],
  [[18.107098, 42.641568], 'HR', 'Igreja e Mosteiro Fanciscano'],
  [[14.495298, 40.749709], 'IT', 'Parque Arqueológico de Pompéia'],
  [[14.549958, 40.614219], 'IT', 'Costa Amalfitana']
]

var attractions_en = [
  [[-46.640165, -22.700645], 'BR', 'Cachoeira do Sol'],
  [[-46.644647, -22.674067], 'BR', 'Fazenda Salmo 23'],
  [[-50.809309, -29.363867], 'BR', 'Catedral de Pedra'],
  [[-50.851944, -29.312842], 'BR', 'Parque do Caracol'],
  [[-50.777217, -29.331164], 'BR', 'Vale da Ferradura'],
  [[-50.873687, -29.285703], 'BR', 'Parque dos Paredões'],
  [[-50.834335, -29.350026], 'BR', 'Parque Pinheiro Grosso'],
  [[-50.834855, -29.394421], 'BR', 'Ecoparque Sperry'],
  [[-50.078375, -29.159675], 'BR', 'Canyon Itaimbezinho'],
  [[-50.877577, -29.394294], 'BR', 'Lago Negro'],
  [[-50.794848, -29.372454], 'BR', 'Parque das Sequoias'],
  [[-50.737633, -29.274653], 'BR', 'Parque da Cachoeira'],
  [[-50.850079, -29.335549], 'BR', 'Castelinho Caracol'],
  [[-54.434538, -25.692903], 'BR', 'Cataratas do Iguaçu'],
  [[-54.590744, -25.594784], 'AR', 'Marco das Três Fronteiras'],
  [[-54.440813, -25.690880], 'AR', 'Cataratas do Iguaçu'],
  [[-54.437490, -25.695362], 'AR', 'Mirante da Garganta do Diabo'],
  [[-54.482174, -25.613405], 'BR', 'Voo de Helicóptero sobre as Cataratas'],
  [[-54.482363, -25.613652], 'BR', 'Parque das Aves'],
  [[-54.588548, -25.407994], 'BR', 'Usina Hidrelétrica de Itaipú'],
  [[-54.457834, -25.648383], 'BR', 'Macuco Safari'],
  [[-47.711117, -22.121222], 'BR', 'Gruta do Índio'],
  [[-122.422945, 37.826665], 'US', 'Presídio de Alcatraz'],
  [[-122.410418, 37.811144], 'US', 'Fisherman\'s Wharf'],
  [[-122.415363, 37.805335], 'US', 'San Francisco Cable Car'],
  [[-122.478253, 37.819938], 'US', 'Golden Gate Bridge'],
  [[-121.901712, 36.371537], 'US', 'Bixby Creek Bridge'],
  [[-121.902742, 36.357429], 'US', 'Hurricane Point'],
  [[-119.677483, 37.715824], 'US', 'Tunnel View'],
  [[-119.595757, 37.749948], 'US', 'Yosemite Falls'],
  [[-119.648578, 37.717472], 'US', 'Braidalveil Fall'],
  [[-119.549442, 37.747752], 'US', 'Mirror Lake'],
  [[-119.573643, 37.730464], 'US', 'Glacier Point'],
  [[-119.544228, 37.726578], 'US', 'Vernal Fall'],
  [[-119.586848, 37.748544], 'US', 'Ansel Adams Gallery'],
  [[-118.751445, 36.581725], 'US', 'General Sherman Tree'],
  [[-122.070689, 37.417284], 'US', 'Computer History Museum'],
  [[-122.088013, 37.418436], 'US', 'Android Lawn Statues'],
  [[-32.398248, -3.834981], 'BR', 'Mirante Buraco da Raquel'],
  [[-32.431141, -3.846836], 'BR', 'Mirante Forte do Boldró'],
  [[-32.446763, -3.858239], 'BR', 'Mirante dos Golfinhos'],
  [[-32.410139, -3.837930], 'BR', 'Forte de Nossa Senhora dos Remédios'],
  [[12.454642, 41.904746], 'VA', 'Vatican Museums'],
  [[12.454479, 41.902965], 'VA', 'Sistine Chapel'],
  [[12.453930, 41.906293], 'VA', 'Bramante Staircase'],
  [[12.457334, 41.902255], 'VA', 'Saint Peter\'s Square'],
  [[12.461570, 41.902114], 'IT', 'Leonardo da Vinci Experience Museum'],
  [[12.492231, 41.890210], 'IT', 'Colosseo'],
  [[12.492461, 41.879030], 'IT', 'Baths of Caracala'],
  [[12.488685, 41.884290], 'IT', 'Circo Massimo'],
  [[12.486326, 41.890891], 'IT', 'Palatino and Roman Forum'],
  [[12.476862, 41.898611], 'IT', 'Pantheon'],
  [[12.483305, 41.900878], 'IT', 'Fontana di Trevi'],
  [[15.978659, 45.806362], 'HR', 'Fontana kralja Tomislava'],
  [[15.977287, 45.813115], 'HR', 'Jelačić Square'],
  [[15.973109, 45.814313], 'HR', 'Zagreb\'s Funicular'],
  [[15.973635, 45.816347], 'HR', 'St. Marks\'s Church'],
  [[15.979790, 45.814501], 'HR', 'Zagreb\'s Cathedral'],
  [[15.607950, 44.902356], 'HR', 'Velik Slap'],
  [[15.228539, 44.112217], 'HR', 'Land Gate'],
  [[15.219877, 44.117212], 'HR', 'Sea Organ'],
  [[15.964000, 43.805218], 'HR', 'Skradinski Buk'],
  [[15.973333, 43.861171], 'HR', 'Visovac Island'],
  [[15.889101, 43.735667], 'HR', 'Šibenik\'s Cathedral'],
  [[15.854655, 43.721561], 'HR', 'St\. Nicholas Fortress'],
  [[16.440275, 43.508581], 'HR', 'Dioclecian\' Palace'],
  [[16.438122, 43.507783], 'HR', 'Riva'],
  [[18.107216, 42.641717], 'HR', 'Pile Gate'],
  [[18.111725, 42.643098], 'HR', 'Dubrovnik Cable Car'],
  [[18.111458, 42.649525], 'HR', 'Srđ Hill'],
  [[18.109520, 42.641246], 'HR', 'Stradun'],
  [[18.104090, 42.640994], 'HR', 'Lovrijenac Fortress'],
  [[18.110638, 42.640335], 'HR', 'Rector\'s Palace'],
  [[18.112295, 42.639902], 'HR', 'Dubrovnik Walls'],
  [[18.112498, 42.640104], 'HR', 'Dubrovnik Maritime Museum'],
  [[18.122144, 42.625386], 'HR', 'Lokrum Island'],
  [[18.107098, 42.641568], 'HR', 'Fanciscan Church and Monastery'],
  [[14.495298, 40.749709], 'IT', 'Archaeological Park of Pompeii'],
  [[14.549958, 40.614219], 'IT', 'Amalfi Coast']
]
