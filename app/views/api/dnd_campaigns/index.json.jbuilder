@dnd_campaigns.each do |dnd_campaign|
    json.set! dnd_campaign.id do 
        json.partial! 'api/dnd_campaigns/dnd_campaign', dnd_campaign: dnd_campaign
    end
end