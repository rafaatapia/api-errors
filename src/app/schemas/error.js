import mongoose from 'mongoose';

const ErrorSchema = mongoose.Schema(
  {
    status: {
      type: Number,
      required: false,
    },
    user: {
      type: String,
      required: true,
    },
    cpf: {
      type: String,
      required: false,
    },
    body: {
      type: String,
      required: true,
    },
    module: {
      type: String,
      required: false,
    },
    version: {
      type: String,
      required: false,
    },
    os: {
      type: String,
      required: false,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model('Error', ErrorSchema);
