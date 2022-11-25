import { CommandDefinition } from '../../lib/command';
import { makeEmbed } from '../../lib/embed';
import { CommandCategory } from '../../constants';

const cycleURL = 'https://png.com/';

export const apu: CommandDefinition = {
    name: ['cycle', 'outofcycle', 'ooc'],
    description: 'Provides explanation to navdata out of cycle.',
    category: CommandCategory.SUPPORT,
    executor: (msg) => {
        const cycleEmbed = makeEmbed({
            title: 'Heavy Division B78XH | Navdata Out of Cycle',
            description: 'Because of default behavior implemented by Asobo, the fuel logic is implemented incorrectly. Please refrain from turning on the center fuel pumps until both engines are running.',
            image: { url: cycleURL },
        });
        return msg.channel.send({ embeds: [cycleEmbed] });
    },
};
