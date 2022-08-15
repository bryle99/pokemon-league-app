const { StatusCodes } = require('http-status-codes');
const LeagueSlot = require('../models/league_slot.model');
const Pokemon = require('../models/pokemon.model');
const League = require('../models/league.model');

exports.findAll = async function (req, res) {
  var { page, pageSize, league_id } = req.query;
  if (page && pageSize) {
    page = parseInt(page);
    pageSize = parseInt(pageSize);
  } else {
    page = 1;
    pageSize = null;
  }

  let where_val = {};
  if (league_id) {
    where_val.league_id = league_id;
  }

  try {
    const data = await LeagueSlot.findAndCountAll({
      offset: pageSize * (page - 1),
      limit: pageSize,
      where: where_val,
      include: [
        { model: Pokemon, as: 'pokemon_1' },
        { model: Pokemon, as: 'pokemon_2' },
      ],
    });
    return res.status(StatusCodes.OK).json({
      data: data.rows,
      pagination: {
        page: page,
        rowCount: data.count,
      },
    });
  } catch (error) {
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      error: error,
    });
  }
};

exports.findById = async function (req, res) {
  try {
    const data = await LeagueSlot.findByPk(req.params.id);

    if (data === null) {
      res.status(StatusCodes.NOT_FOUND).json({
        error: 'Not Found!',
        data: {},
      });
    } else {
      res.status(StatusCodes.OK).json({
        data: data,
      });
    }
  } catch (error) {
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      error: error,
    });
  }
};

exports.store = async function (req, res) {
  const { league_id, pokemon_id_1, pokemon_id_2 } = req.body;

  try {
    const league = await League.findOne({ where: { id: league_id } });
    const { count } = await LeagueSlot.findAndCountAll({
      where: { league_id: league_id },
    });

    if (league && league.reqSlots > count) {
      var check = await LeagueSlot.findOne({ where: { ...req.body } });
      if (check == null) {
        check = await LeagueSlot.findOne({
          where: {
            league_id: league_id,
            pokemon_id_1: pokemon_id_2,
            pokemon_id_2: pokemon_id_1,
          },
        });
      }

      if (check) {
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
          success: false,
          error: 'Pokemon/s are already registered in this league.',
        });
      } else {
        var total = 0;
        const pokemon_1 = await Pokemon.findOne({
          where: { id: pokemon_id_1 },
        });
        total += pokemon_1 ? pokemon_1.totalStats : 0;
        if (pokemon_id_2 != null) {
          const pokemon_2 = await Pokemon.findOne({
            where: { id: pokemon_id_2 },
          });
          total += pokemon_2 ? pokemon_2.totalStats : 0;
        }

        if (total > league.maxStatsLimit) {
          res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
            success: false,
            error: 'League Slot has exceeded League stat limits.',
          });
        } else {
          const data = await LeagueSlot.create(req.body);
          res.status(StatusCodes.OK).json({
            success: true,
            data: data,
          });
        }
      }
    } else {
      res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
        success: false,
        error: 'League has reached its maximum slot limit.',
      });
    }
  } catch (error) {
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      success: false,
      error: error,
    });
  }
};

// exports.update = async function (req, res) {
//     try {
//         const data = await LeagueSlot.update(req.body, {
//             where: {
//                 id: req.params.id,
//             },
//         });

//         res.status(StatusCodes.OK).json({
//             success: true,
//             data: data,
//         });
//     } catch (error) {
//         return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
//             success: false,
//             error: error,
//         });
//     }
// };

// exports.destroy = async function (req, res) {
//     try {
//         const data = await LeagueSlot.destroy({
//             where: { id: req.params.id },
//         });

//         res.status(StatusCodes.OK).json({
//             success: true,
//             data: data,
//         });
//     } catch (error) {
//         return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
//             success: false,
//             error: error,
//         });
//     }
// };
