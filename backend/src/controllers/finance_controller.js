import Finance from "../models/FinanaceSchema.js";

export const addFinance = async (req, res) => {
  const { id } = req.params;
  const { amount, type, description, Name, status } = req.body;
  const newFinance = new Finance({
    userId: id,
    amount,
    type,
    description,
    Name,
    status,
  });
  try {
    await newFinance.save();
    res.status(201).json(newFinance);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

export const getFinance = async (req, res) => {
  try {
    const getAll = await Finance.find();
    res.status(200).json(getAll);
  } catch (error) {
    console.log(error);
  }
};
