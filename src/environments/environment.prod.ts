export const environment = {
  production: true,
  apiUrl: 'https://tera-piercing-back.onrender.com',
  mongoConfig:{
    uri:'mongodb+srv://admterapiercing:NPAPr4auqmkJHfDc@terapiercing.kkatsk2.mongodb.net/?retryWrites=true&w=majority&appName=terapiercing',
    databaseName:'terapiercing_db',
  },
    // Configurações do Cloudinary para imagens
  cloudinaryConfig: {
    cloudName: 'dowsyd1sx',  // Substitua pelo nome da sua conta no Cloudinary
    apiKey: '515296627378743',        // A chave da sua API do Cloudinary
    apiSecret: 'SEU_API_SECRET',  // O segredo da sua API do Cloudinary
    uploadPreset: 'WjmL_W21SOvChL3Jpak-AmdqUas',  // Se tiver um upload preset configurado no Cloudinary
  },
};


