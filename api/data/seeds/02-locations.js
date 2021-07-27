
exports.seed = function(knex) {
  return knex('locations').insert([
    { location_name: 'Kenya', location_abr: 'KEN' },
    { location_name: 'Uganda', location_abr: 'UGA' },
    { location_name: 'Tanzania', location_abr: 'TZA' },
    { location_name: 'Rwanda', location_abr: 'RWA' },
    { location_name: 'South Sudan', location_abr: 'SSD' },
    { location_name: 'Burudni', location_abr: 'BDI' },
    { location_name: 'Democratic Republic of Congo', location_abr: 'DRC' }
  ]);
};
