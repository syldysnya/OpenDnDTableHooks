json.past(@reservations.first) do |reservation|
    json.partial! 'api/reservations/reservation', reservation: reservation
end
json.future(@reservations.last) do |reservation|
    json.partial! 'api/reservations/reservation', reservation: reservation
end