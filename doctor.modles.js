import mongoose from 'mongoose';

const hospitalSchemaHour = new mongoose.Schema({
  hopital: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Hospital',
  },
  hour: {
    type: Number,
  },
});

const doctorSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    salary: {
      type: String,
      required: true,
    },
    qualification: {
      type: String,
      required: true,
    },
    experienceINYears: {
      type: String,
      default: 0,
    },
    worksInHospitals: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Hospital',
      },
    ],
    noofhours: {
      type: [hospitalSchemaHour],
    },
  },
  { timestamps: true }
);

export const Doctor = mongoose.model('Doctor', doctorSchema);
