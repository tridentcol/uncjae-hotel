import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import { ROOM_TYPES } from '../../config/rooms';

const BookingForm = ({ onClose }) => {
  const [checkIn, setCheckIn] = useState(null);
  const [checkOut, setCheckOut] = useState(null);
  const [numberOfDays, setNumberOfDays] = useState(0);

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    watch
  } = useForm({
    defaultValues: {
      guestName: '',
      roomCount: 1,
      phoneNumber: '',
    },
  });

  // Observar el valor de roomCount
  const roomCount = watch('roomCount');

  useEffect(() => {
    if (checkIn && checkOut) {
      const diffTime = Math.abs(checkOut - checkIn);
      const days = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
      setNumberOfDays(days);
      setValue('numberOfDays', days);
    }
  }, [checkIn, checkOut, setValue]);

  const onSubmit = (data) => {
    const totalPrice = numberOfDays * ROOM_TYPES.COLONIAL_SUITE.price * parseInt(data.roomCount);
    const bookingData = {
      ...data,
      checkIn,
      checkOut,
      numberOfDays,
      roomType: ROOM_TYPES.COLONIAL_SUITE.id,
      totalPrice,
      pricePerNight: ROOM_TYPES.COLONIAL_SUITE.price,
    };
    console.log('Booking submitted:', bookingData);
    if (onClose) onClose();
  };

  // Calcular el precio total
  const calculateTotal = () => {
    if (numberOfDays && roomCount) {
      return numberOfDays * ROOM_TYPES.COLONIAL_SUITE.price * parseInt(roomCount);
    }
    return 0;
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <div>
        <label className="block text-sm font-medium text-luxury-brown dark:text-luxury-cream-light mb-1">
          Nombre del Huésped
        </label>
        <input
          {...register('guestName', { required: 'El nombre es requerido' })}
          className="w-full p-2 rounded-lg
            border border-luxury-cream-dark dark:border-luxury-brown
            bg-luxury-cream dark:bg-luxury-brown
            text-luxury-brown dark:text-luxury-cream
            focus:ring-2 focus:ring-luxury-gold-light focus:border-transparent"
          placeholder="Ingrese su nombre completo"
        />
        {errors.guestName && (
          <span className="text-red-500 text-sm">{errors.guestName.message}</span>
        )}
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-luxury-brown dark:text-luxury-cream-light mb-1">
            Fecha de Llegada
          </label>
          <DatePicker
            selected={checkIn}
            onChange={date => setCheckIn(date)}
            minDate={new Date()}
            className="w-full p-2 rounded-lg
              border border-luxury-cream-dark dark:border-luxury-brown
              bg-luxury-cream dark:bg-luxury-brown
              text-luxury-brown dark:text-luxury-cream
              focus:ring-2 focus:ring-luxury-gold-light focus:border-transparent"
            placeholderText="Seleccione fecha"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-luxury-brown dark:text-luxury-cream-light mb-1">
            Fecha de Salida
          </label>
          <DatePicker
            selected={checkOut}
            onChange={date => setCheckOut(date)}
            minDate={checkIn || new Date()}
            className="w-full p-2 rounded-lg
              border border-luxury-cream-dark dark:border-luxury-brown
              bg-luxury-cream dark:bg-luxury-brown
              text-luxury-brown dark:text-luxury-cream
              focus:ring-2 focus:ring-luxury-gold-light focus:border-transparent"
            placeholderText="Seleccione fecha"
          />
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-luxury-brown dark:text-luxury-cream-light mb-1">
            Número de Habitaciones
          </label>
          <select
            {...register('roomCount')}
            className="w-full p-2 rounded-lg
              border border-luxury-cream-dark dark:border-luxury-brown
              bg-luxury-cream dark:bg-luxury-brown
              text-luxury-brown dark:text-luxury-cream
              focus:ring-2 focus:ring-luxury-gold-light focus:border-transparent"
          >
            {[1, 2, 3, 4, 5].map((num) => (
              <option key={num} value={num}>
                {num} {num === 1 ? 'Habitación' : 'Habitaciones'}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-luxury-brown dark:text-luxury-cream-light mb-1">
            Teléfono
          </label>
          <input
            {...register('phoneNumber', {
              required: 'El teléfono es requerido',
              pattern: {
                value: /^[+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,6}$/,
                message: 'Ingrese un número válido',
              },
            })}
            className="w-full p-2 rounded-lg
              border border-luxury-cream-dark dark:border-luxury-brown
              bg-luxury-cream dark:bg-luxury-brown
              text-luxury-brown dark:text-luxury-cream
              focus:ring-2 focus:ring-luxury-gold-light focus:border-transparent"
            placeholder="Ingrese su teléfono"
          />
          {errors.phoneNumber && (
            <span className="text-red-500 text-sm">{errors.phoneNumber.message}</span>
          )}
        </div>
      </div>

      {numberOfDays > 0 && (
        <div className="space-y-2">
          <div className="text-sm text-luxury-brown dark:text-luxury-cream-light">
            Duración de la estancia: {numberOfDays} {numberOfDays === 1 ? 'noche' : 'noches'}
          </div>
          <div className="text-base text-luxury-brown dark:text-luxury-cream-light">
            {roomCount} {parseInt(roomCount) === 1 ? 'habitación' : 'habitaciones'} x ${ROOM_TYPES.COLONIAL_SUITE.price} USD por noche
          </div>
          <div className="text-lg font-medium text-luxury-gold">
            Total: ${calculateTotal()} USD
          </div>
        </div>
      )}

      <button
        type="submit"
        className="w-full py-3 px-4 rounded-lg
          bg-luxury-gold hover:bg-luxury-gold-dark
          text-white text-lg font-light
          transition-colors"
      >
        Confirmar Reserva
      </button>
    </form>
  );
};

export default BookingForm;