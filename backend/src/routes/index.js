const {Router} = require('express');
const userRouter = require('./user.routes');
const postmanRouter = require('./postman.routes');
const parcelRouter = require('./parcel.routes');
const adminRouter = require('./admin.routes');
const notificationRouter = require('./notification.routes');
const failedDeliveryRouter = require('./failedDelivery.routes');
const feedbackRouter = require('./feedback.routes');

const router = Router();

router.get('/', (req, res) => {
    res.json({message: 'Welcome to the API'});
});

router.use('/user', userRouter);
router.use('/postman', postmanRouter);
router.use('/parcel', parcelRouter);
router.use('/admin', adminRouter);
router.use('/notification', notificationRouter);
router.use('/faileddelivery', failedDeliveryRouter);
router.use('/feedback', feedbackRouter);

module.exports = router;