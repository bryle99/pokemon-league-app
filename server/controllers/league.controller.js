const { StatusCodes } = require('http-status-codes');
const League = require('../models/league.model')

exports.findAll = async function (req, res) {
    var { page, pageSize } = req.query;
    if (page && pageSize) {
        page = parseInt(page);
        pageSize = parseInt(pageSize);
    } else {
        page = 1;
        pageSize = null;
    }

    try {
        const data = await League.findAndCountAll({
            offset: pageSize * (page - 1),
            limit: pageSize,
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
        const data = await League.findByPk(req.params.id);

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
    try {
        const data = await League.create(req.body);

        res.status(StatusCodes.OK).json({
            success: true,
            data: data,
        });
    } catch (error) {
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
            success: false,
            error: error,
        });
    }
};

// exports.update = async function (req, res) {
//     try {
//         const data = await League.update(req.body, {
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
//         const data = await League.destroy({
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
